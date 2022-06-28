import { Module } from '@nestjs/common';
import { ScalpingService } from './scalping.service';
import { BinanceModule } from '../binance/binance.module';
import { BinanceService } from '../binance/binance.service';
import { LocalCacheModule } from '../localStorage/local.storage.module';
import { CacheService } from '../localStorage/local.storage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scalping } from '../entity/scalping.entiti';

@Module({
  imports: [
    BinanceModule,
    LocalCacheModule,
    TypeOrmModule.forFeature([Scalping]),
  ],
  controllers: [],
  providers: [ScalpingService, BinanceService, CacheService],
})
export class ScalpingModule {}
