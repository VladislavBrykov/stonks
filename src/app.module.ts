import { Module } from '@nestjs/common';
import { BinanceModule } from './binance/binance.module';
import { ScalpingModule } from './scalping/scalping.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BinanceModule, ScalpingModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
