import { Markup } from 'telegraf';

export function getMainMenu() {
  return Markup.keyboard([
    // ['Быстрые ставки', 'Ставки на день'],
    ['Автоматизированная торговля'],
  ]).resize();
}
