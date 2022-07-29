import { Module } from '@nestjs/common';
import { QuotasModule } from '../modules/quotas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    QuotasModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }),
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
