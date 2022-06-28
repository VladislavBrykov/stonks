import { ScalpingService } from './scalping/scalping.service';
import { BinanceService } from './binance/binance.service';
import { getMainMenu } from './keyboard/keyboard';
import { botMessages } from './constants/bot.messages';
import {
  generateMessageAboutMe,
  generateMessageAboutPrivateChannel,
  generateMessageForMailing,
} from './helpers/generateMessageForMailing';
require('dotenv').config();
const cron = require('node-cron');
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.TELEGRAM_BOT_ID);

const binanceService = new BinanceService();
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000);
const fs = require('fs');

const scalpingService = new ScalpingService(binanceService);

bot.start((ctx) => ctx.reply(botMessages.start, getMainMenu()));
bot.help((ctx) => ctx.reply('Send me a sticker'));
app.use(express.static('public'));
app.use(express.static('files'));

bot.hears(botMessages.quickBets, async (ctx) => {
  cron.schedule('0 */9 * * *', async () => {
    //every 9 hour
    ctx.telegram.sendMessage(process.env.CHAT_ID, generateMessageAboutMe());
  });

  cron.schedule('0 */6 * * *', async () => {
    //every 6 hour
    ctx.telegram.sendMessage(
      process.env.CHAT_ID,
      generateMessageAboutPrivateChannel(),
    );
  });

  cron.schedule('0 */12 * * *', async () => {
    //every 12 hour
    ctx.telegram.sendMessage(
      process.env.CHAT_ID,
      botMessages.aboutGeneralStonks.toString(),
    );
  });

  cron.schedule('0 */3 * * *', async () => {
    //every 3 hour
    const result: any = await scalpingService.getPairScalpingInfo();

    await ctx.telegram.sendMessage(
      process.env.CHAT_ID,
      generateMessageForMailing(result.toString()),
    );

    await setTimeout(async function () {
      const resultProfitImages = await scalpingService.searchProfit(result);

      if (resultProfitImages.length == 0) {
        setTimeout(async function () {
          const resultProfitImages = await scalpingService.searchProfit(result);
          if (resultProfitImages.length != 0) {
            await ctx.telegram.sendMediaGroup(
              process.env.CHAT_ID,
              resultProfitImages,
            );
          }
        }, 1000 * 60 * 60); //after 1 hour
      }

      if (resultProfitImages.length != 0) {
        await ctx.telegram.sendMediaGroup(
          process.env.CHAT_ID,
          resultProfitImages,
        );
      }
    }, 1000 * 60 * 60); //after 1 hour
  });
});

bot.launch();
