import { botMessages, riskManagementMessages } from '../constants/bot.messages';
import { Profit } from '../constants/profit';

export function generateMessageForMailing(forecast) {
  return (
    botMessages.introduction +
    botMessages.fiveMinuteLimit +
    Profit.min +
    botMessages.return +
    forecast.toString() +
    botMessages.return +
    botMessages.return +
    riskManagementMessages[
      Math.floor(Math.random() * riskManagementMessages.length)
    ] +
    botMessages.return +
    botMessages.info
  );
}

export function generateMessageAboutPrivateChannel() {
  return (
    '🏄‍️ Пока Рынок летит вниз, мы зарабатываем\n' +
    '💠В очередной раз закрыли вчерашний день отличным стриком трейдов\n' +
    '🤑 Не успускайте возможность сделать деньги\n' +
    '🏦 Take profit: прогнозы приходят каждые 30 минут\n\n' +
    '💎 Чтобы получить доступ в приватный канал пишите мне в ЛС: @VladislavBrk\n' +
    '💵 Сейчас цена 75$/мес'
  );
}

export function generateMessageAboutMe() {
  return (
    'Друзья, всех поздравляем с денежной неделей 😎💵\n' +
    'Здесь вы можете зарабатывать на бесплатных сигналах\n' +
    'Мы торгуем на Фьючерсах Binance с плечом от 20x!🚨\n' +
    'По каждому прогнозу прикладываем результат-отчет!\n' +
    'Прогнозы присылает не человек. Мы написали своего рода искусственный интеллект, который анализует рынок по множеству факторов и присылает подсказки в чат. Залететай на сигналы и поднимай бабки вместе с нами 💵🚀🔥\n\n' +
    '💎 Чтобы получить доступ в приватный канал пишите мне в ЛС: @VladislavBrk\n' +
    '💵 Сейчас цена 75$/мес, дальшк'
  );
}
