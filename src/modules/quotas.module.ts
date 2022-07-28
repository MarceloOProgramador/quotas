import { Module } from '@nestjs/common';
import { QuotasService } from '../use-cases/quotas.service';
import { QuotasController } from '../controllers/quotas.controller';

@Module({
  controllers: [QuotasController],
  providers: [QuotasService]
})
export class QuotasModule {}
