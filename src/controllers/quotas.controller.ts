import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuotasService } from '../use-cases/quotas.service';
import { CreateQuotaDto } from '../dtos/quota.create.dto'
import { UpdateQuotaDto } from '../dtos/quota.create.dto'
import QuotaRepository from 'src/use-cases/repositories/quotas.repository';

@Controller('quotas')

export class QuotasController {
  ;

  constructor(
    private quotasService: QuotasService
  ) {
    this.quotasService = new QuotasService(new QuotaRepository)
  }

  @Post()
  create(@Body() createQuotaDto: CreateQuotaDto) {
    return this.quotasService.create(createQuotaDto);
  }

  @Get()
  findAll() {
    return this.quotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('cod') cod: string) {
    return this.quotasService.findOne(+cod);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuotaDto: UpdateQuotaDto) {
    return this.quotasService.update(+id, updateQuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotasService.remove(+id);
  }
}
