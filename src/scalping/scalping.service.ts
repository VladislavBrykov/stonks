import { Injectable } from '@nestjs/common';
import { CryptoPair } from '../constants/cryptoPair';
import { BinanceService } from '../binance/binance.service';
import { Turn } from '../constants/turn';
import { Profit } from '../constants/profit';
import { generatePairToReport } from './helpers/addPairToReport';
import { CacheService } from '../localStorage/local.storage.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Scalping } from '../entity/scalping.entiti';
import { Repository } from 'typeorm';
import { generateImageLong } from '../helpers/generateResultsImageLong';
import {
  calculatePercentProfitLong,
  calculatePercentProfitShort,
} from './helpers/calculatePercentProfit';
import { generateImageShort } from '../helpers/generateResultsImageShort';
import { nonFunctionArgSeparator } from 'html2canvas/dist/types/css/syntax/parser';

var cacheManager = require('cache-manager');
var memoryCache = cacheManager.caching({
  store: 'memory',
  max: 100,
  ttl: 10 /*seconds*/,
});
var ttl = 5;

@Injectable()
export class ScalpingService {
  constructor(
    @InjectRepository(Scalping)
    private binanceService: BinanceService,
  ) {}

  async getPairScalpingInfo(): Promise<any> {
    let stonks = [];
    const cryptoPairInfoBTCUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.BTCUSDT,
    );
    const longBTCUSDT: string | false = await this.searchLongProfit(
      stonks,
      cryptoPairInfoBTCUSDT,
      CryptoPair.BTCUSDT,
    );
    const shortBTCUSDT: string | false = await this.searchShortProfit(
      stonks,
      cryptoPairInfoBTCUSDT,
      CryptoPair.BTCUSDT,
    );
    if (longBTCUSDT) stonks.push(longBTCUSDT);
    if (shortBTCUSDT) stonks.push(shortBTCUSDT);

    const cryptoPairInfoETHUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.ETHUSDT,
    );
    const longETHUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoETHUSDT,
      CryptoPair.ETHUSDT,
    );
    const shortETHUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoETHUSDT,
      CryptoPair.ETHUSDT,
    );
    if (longETHUSDT) stonks.push(longETHUSDT);
    if (shortETHUSDT) stonks.push(shortETHUSDT);

    const cryptoPairInfoBNBUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.BNBUSDT,
    );
    const longBNBUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoBNBUSDT,
      CryptoPair.BNBUSDT,
    );
    const shortBNBUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoBNBUSDT,
      CryptoPair.BNBUSDT,
    );
    if (longBNBUSDT) stonks.push(longBNBUSDT);
    if (shortBNBUSDT) stonks.push(shortBNBUSDT);

    const cryptoPairInfoNEOUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.NEOUSDT,
    );
    const longNEOUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoNEOUSDT,
      CryptoPair.NEOUSDT,
    );
    const shortNEOUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoNEOUSDT,
      CryptoPair.NEOUSDT,
    );
    if (longNEOUSDT) stonks.push(longNEOUSDT);
    if (shortNEOUSDT) stonks.push(shortNEOUSDT);

    const cryptoPairInfoLTCUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.LTCUSDT,
    );
    const longLTCUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoLTCUSDT,
      CryptoPair.LTCUSDT,
    );
    const shortLTCUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoLTCUSDT,
      CryptoPair.LTCUSDT,
    );
    if (longLTCUSDT) stonks.push(longLTCUSDT);
    if (shortLTCUSDT) stonks.push(shortLTCUSDT);

    const cryptoPairInfoQTUMUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.QTUMUSDT,
    );
    const longQTUMUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoQTUMUSDT,
      CryptoPair.QTUMUSDT,
    );
    const shortQTUMUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoQTUMUSDT,
      CryptoPair.QTUMUSDT,
    );
    if (longQTUMUSDT) stonks.push(longQTUMUSDT);
    if (shortQTUMUSDT) stonks.push(shortQTUMUSDT);

    const cryptoPairInfoADAUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.ADAUSDT,
    );
    const longADAUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoADAUSDT,
      CryptoPair.ADAUSDT,
    );
    const shortADAUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoADAUSDT,
      CryptoPair.ADAUSDT,
    );
    if (longADAUSDT) stonks.push(longADAUSDT);
    if (shortADAUSDT) stonks.push(shortADAUSDT);

    const cryptoPairInfoXRPUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.XRPUSDT,
    );
    const longXRPUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoXRPUSDT,
      CryptoPair.XRPUSDT,
    );
    const shortXRPUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoXRPUSDT,
      CryptoPair.XRPUSDT,
    );
    if (longXRPUSDT) stonks.push(longXRPUSDT);
    if (shortXRPUSDT) stonks.push(shortXRPUSDT);

    const cryptoPairInfoEOSUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.EOSUSDT,
    );

    const longEOSUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoEOSUSDT,
      CryptoPair.EOSUSDT,
    );
    const shortEOSUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoEOSUSDT,
      CryptoPair.EOSUSDT,
    );
    if (longEOSUSDT) stonks.push(longEOSUSDT);
    if (shortEOSUSDT) stonks.push(shortEOSUSDT);

    const cryptoPairInfoIOTAUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.IOTAUSDT,
    );
    const longIOTAUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoIOTAUSDT,
      CryptoPair.IOTAUSDT,
    );
    const shortIOTAUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoIOTAUSDT,
      CryptoPair.IOTAUSDT,
    );
    if (longIOTAUSDT) stonks.push(longIOTAUSDT);
    if (shortIOTAUSDT) stonks.push(shortIOTAUSDT);

    const cryptoPairInfoXLMUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.XLMUSDT,
    );
    const longXLMUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoXLMUSDT,
      CryptoPair.XLMUSDT,
    );
    const shortXLMUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoXLMUSDT,
      CryptoPair.XLMUSDT,
    );
    if (longXLMUSDT) stonks.push(longXLMUSDT);
    if (shortXLMUSDT) stonks.push(shortXLMUSDT);

    const cryptoPairInfoETCUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.ETCUSDT,
    );
    const longETCUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoETCUSDT,
      CryptoPair.ETCUSDT,
    );
    const shortETCUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoETCUSDT,
      CryptoPair.ETCUSDT,
    );
    if (longETCUSDT) stonks.push(longETCUSDT);
    if (shortETCUSDT) stonks.push(shortETCUSDT);
    ///////////////////////////////
    const cryptoPairInfoIOTXUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.IOTXUSDT,
    );
    const longIOTXUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoIOTXUSDT,
      CryptoPair.IOTXUSDT,
    );
    const shortIOTXUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoIOTXUSDT,
      CryptoPair.IOTXUSDT,
    );
    if (longIOTXUSDT) stonks.push(longIOTXUSDT);
    if (shortIOTXUSDT) stonks.push(shortIOTXUSDT);
    /////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoLUNA2BUSD = await this.binanceService.getCryptoInfo(
      CryptoPair.LUNA2BUSD,
    );
    const longLUNA2BUSD = await this.searchLongProfit(
      stonks,
      cryptoPairInfoLUNA2BUSD,
      CryptoPair.LUNA2BUSD,
    );
    const shortLUNA2BUSD = await this.searchShortProfit(
      stonks,
      cryptoPairInfoLUNA2BUSD,
      CryptoPair.LUNA2BUSD,
    );
    if (longLUNA2BUSD) stonks.push(longLUNA2BUSD);
    if (shortLUNA2BUSD) stonks.push(shortLUNA2BUSD);
    /////////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoOMGUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.OMGUSDT,
    );
    const longOMGUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoOMGUSDT,
      CryptoPair.OMGUSDT,
    );
    const shortOMGUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoOMGUSDT,
      CryptoPair.OMGUSDT,
    );
    if (longOMGUSDT) stonks.push(longOMGUSDT);
    if (shortOMGUSDT) stonks.push(shortOMGUSDT);
    /////////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoBALUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.BALUSDT,
    );
    const longBALUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoBALUSDT,
      CryptoPair.BALUSDT,
    );
    const shortBALUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoBALUSDT,
      CryptoPair.BALUSDT,
    );
    if (longBALUSDT) stonks.push(longBALUSDT);
    if (shortBALUSDT) stonks.push(shortBALUSDT);
    /////////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoDOGEBUSD = await this.binanceService.getCryptoInfo(
      CryptoPair.DOGEBUSD,
    );
    const longDOGEBUSD = await this.searchLongProfit(
      stonks,
      cryptoPairInfoBALUSDT,
      CryptoPair.DOGEBUSD,
    );
    const shortDOGEBUSD = await this.searchShortProfit(
      stonks,
      cryptoPairInfoDOGEBUSD,
      CryptoPair.DOGEBUSD,
    );
    if (longDOGEBUSD) stonks.push(longDOGEBUSD);
    if (shortDOGEBUSD) stonks.push(shortDOGEBUSD);
    /////////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoXTZUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.XTZUSDT,
    );
    const longXTZUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoXTZUSDT,
      CryptoPair.XTZUSDT,
    );
    const shortXTZUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoXTZUSDT,
      CryptoPair.XTZUSDT,
    );
    if (longXTZUSDT) stonks.push(longXTZUSDT);
    if (shortXTZUSDT) stonks.push(shortXTZUSDT);
    /////////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoARUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.ARUSDT,
    );
    const longARUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoARUSDT,
      CryptoPair.ARUSDT,
    );
    const shortARUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoARUSDT,
      CryptoPair.ARUSDT,
    );
    if (longARUSDT) stonks.push(longARUSDT);
    if (shortARUSDT) stonks.push(shortARUSDT);
    /////////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoDENTUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.DENTUSDT,
    );
    const longDENTUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoDENTUSDT,
      CryptoPair.DENTUSDT,
    );
    const shortDENTUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoDENTUSDT,
      CryptoPair.DENTUSDT,
    );
    if (longDENTUSDT) stonks.push(longDENTUSDT);
    if (shortDENTUSDT) stonks.push(shortDENTUSDT);
    /////////////////////////////////////////////////////////////////////////////////
    const cryptoPairInfoGALAUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.GALAUSDT,
    );
    const longGALAUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoGALAUSDT,
      CryptoPair.GALAUSDT,
    );
    const shortGALAUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoGALAUSDT,
      CryptoPair.GALAUSDT,
    );
    if (longGALAUSDT) stonks.push(longGALAUSDT);
    if (shortGALAUSDT) stonks.push(shortGALAUSDT);
    const cryptoPairInfoONTUSDT = await this.binanceService.getCryptoInfo(
      CryptoPair.ONTUSDT,
    );
    const longONTUSDT = await this.searchLongProfit(
      stonks,
      cryptoPairInfoONTUSDT,
      CryptoPair.ONTUSDT,
    );
    const shortONTUSDT = await this.searchShortProfit(
      stonks,
      cryptoPairInfoONTUSDT,
      CryptoPair.ONTUSDT,
    );
    if (longONTUSDT) stonks.push(longONTUSDT);
    if (shortONTUSDT) stonks.push(shortONTUSDT);

    if (stonks.length > 0) {
      return stonks;
    } else return false;
  }

  async searchLongProfit(stonks, cryptoPair, namePair) {
    const countReports = Object.keys(cryptoPair).length;
    if (countReports !== 500) return false;

    if (
      cryptoPair[countReports - 3].close < cryptoPair[countReports - 2].close &&
      cryptoPair[countReports - 2].close < cryptoPair[countReports - 1].close
    ) {
      return generatePairToReport(
        namePair,
        Turn.long,
        cryptoPair[countReports - 1].close,
      );
    }
    return false;
  }

  async searchShortProfit(stonks, cryptoPair, namePair) {
    const countReports = Object.keys(cryptoPair).length;
    if (countReports !== 500) return false;

    if (
      cryptoPair[countReports - 3].close > cryptoPair[countReports - 2].close &&
      cryptoPair[countReports - 2].close > cryptoPair[countReports - 1].close
    ) {
      return generatePairToReport(
        namePair,
        Turn.short,
        cryptoPair[countReports - 1].close,
      );
    }
    return false;
  }

  async searchAllProfit(typeProfit, cryptoPair, namePair, startPrice) {
    const countReports = Object.keys(cryptoPair).length;
    if (countReports !== 500) return false;
    let n = 1;

    let profit;

    if (typeProfit == 'LONG') {
      while (
        cryptoPair[countReports - n]!.close > startPrice &&
        n !== 30 &&
        cryptoPair[countReports - n]
      ) {
        if (
          cryptoPair[countReports - n].high > startPrice &&
          cryptoPair[countReports - n].high >
            cryptoPair[countReports - (n + 1)].high
        )
          profit = cryptoPair[countReports - n].high;
        console.log(n);
        n += 1;
      }

      if (profit < startPrice) {
        return false;
      }
      if (profit > startPrice) {
        const percent = calculatePercentProfitLong(startPrice, profit);
        await generateImageLong(
          namePair,
          percent,
          startPrice,
          profit,
          Turn.longColor,
          Turn.long,
        );
        return {
          type: 'photo',
          media: { source: 'public/' + namePair + '.png' },
        };
      }
      if (profit == startPrice) {
        return false;
      }
    }
    ////////////////............................................

    if (typeProfit == 'SHORT') {
      while (
        cryptoPair[countReports - n].close < startPrice &&
        n !== 10 &&
        cryptoPair[countReports - n]
      ) {
        if (
          cryptoPair[countReports - n].low < startPrice &&
          cryptoPair[countReports - n].low <
            cryptoPair[countReports - (n + 1)].low
        )
          profit = cryptoPair[countReports - n].low;
        n += 1;
      }

      if (profit > startPrice) {
        return false;
      }
      if (profit < startPrice) {
        const percent = calculatePercentProfitShort(startPrice, profit);
        await generateImageShort(
          namePair,
          percent,
          startPrice,
          profit,
          Turn.shortColor,
          Turn.short,
        );
        return {
          type: 'photo',
          media: { source: 'public/' + namePair + '.png' },
        };
      }
      if (profit == startPrice) {
        return false;
      }
    }
  }

  async searchProfit(result) {
    let stonks = [];
    const countPair = result.length;
    for (let pair in result) {
      const arr = result[pair].split(' ');
      const firstWord = arr[0].replace(/\n/g, '');
      const typeProfit = arr[1];
      const startPrice = arr[3];

      const pairInfo = await this.binanceService.getCryptoInfo(firstWord);

      const profit = await this.searchAllProfit(
        typeProfit,
        pairInfo,
        firstWord,
        startPrice,
      );

      if (profit && stonks.length != 8) {
        stonks.push(profit);
      }
    }
    console.log(
      '-----------------------------------------------------------------------',
      stonks,
    );
    if (stonks.length / countPair < 0.5) return [];
    else return stonks;
  }
}
