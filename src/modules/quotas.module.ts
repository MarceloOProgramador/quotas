import { Module } from '@nestjs/common';
import { QuotasController } from '../controllers/quotas.controller';

@Module({
  controllers: [QuotasController],
  providers: []
})
export class QuotasModule {}
