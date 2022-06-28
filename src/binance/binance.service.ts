import { Injectable } from '@nestjs/common';
const Binance = require('binance-api-node').default;
const client = Binance();

@Injectable()
export class BinanceService {
  constructor() {}

  async getCryptoInfo(cryptoPair: string): Promise<any> {
    return await client.futuresCandles({ symbol: cryptoPair });
  }
}
