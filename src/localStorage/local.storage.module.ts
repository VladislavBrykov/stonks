import { CacheModule, Module } from '@nestjs/common';
import { CacheService } from './local.storage.service';

@Module({
  imports: [CacheModule.register()],
  exports: [CacheService],
})
export class LocalCacheModule {}
