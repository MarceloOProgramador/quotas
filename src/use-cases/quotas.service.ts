import { Injectable } from '@nestjs/common';
import { CreateQuotaDto, UpdateQuotaDto } from '../dtos/quota.create.dto';
import { RepositoryInterface } from "./repositories/repository.interface";

@Injectable()
export class QuotasService {
  private repository: RepositoryInterface
  constructor(repository: RepositoryInterface){};

  create(datas: CreateQuotaDto) {
    this.repository.create(datas); 
    return 'This action adds a new quota';
  }

  findAll() {
    return `This action returns all quotas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quota`;
  }

  update(id: number, updateQuotaDto: UpdateQuotaDto) {
    return `This action updates a #${id} quota`;
  }

  remove(id: number) {
    return `This action removes a #${id} quota`;
  }
}
