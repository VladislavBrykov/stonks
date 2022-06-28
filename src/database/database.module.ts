import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scalping } from '../entity/scalping.entiti';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      synchronize: true,
      entities: [Scalping],
    }),
  ],
})
export class DatabaseModule {}
