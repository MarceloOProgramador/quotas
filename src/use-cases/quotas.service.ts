import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuotaDto, UpdateQuotaDto } from '../dtos/quota.create.dto';
import { RepositoryInterface } from "./repositories/repository.interface";

@Injectable()
export class QuotasService {

  constructor(private repository: RepositoryInterface){};

  create(datas: CreateQuotaDto) {

    if(!this.repository.create(datas))
      return HttpStatus.INTERNAL_SERVER_ERROR;

    return HttpStatus.CREATED;
  }

  findAll() {
    return this.repository.findAll();
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
