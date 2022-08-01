import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuotasService } from '../use-cases/quotas.service';
import { CreateQuotaDto } from '../dtos/quota.create.dto'
import { UpdateQuotaDto } from '../dtos/quota.create.dto'
import QuotaRepository from 'src/use-cases/repositories/quotas.repository';

@Controller('quotas')

export class QuotasController {
  private quotasService: QuotasService

  constructor() {
    this.quotasService = new QuotasService(new QuotaRepository);
  }

  @Post()
  create(@Body() createQuotaDto: CreateQuotaDto) {
    return this.quotasService.create(createQuotaDto);
  }

  @Get()
  findAll() {
    return this.quotasService.findAll();
  }

  @Get(':cod')
  findOne(@Param('cod') cod: string) {
    return this.quotasService.findOne(cod);
  }

  @Patch(':cod')
  update(@Param('cod') cod: string, @Body() updateQuotaDto: UpdateQuotaDto) {
    return this.quotasService.update(cod, updateQuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotasService.remove(+id);
  }
}
