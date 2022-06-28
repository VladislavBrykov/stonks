import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
// const cacheManager = require('cache-manager');

var ttl = 1000000;

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async setData(key: string, item: string) {
    await this.cacheManager.set(key, item);
  }

  async getFromCache(key: string) {
    const value = await this.cacheManager.get(key);
    return value;
  }
}
