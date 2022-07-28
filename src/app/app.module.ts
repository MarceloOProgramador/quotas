import { Module } from '@nestjs/common';
import { QuotasModule } from '../modules/domain/quotas/quotas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    QuotasModule, 
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true
    }),
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
