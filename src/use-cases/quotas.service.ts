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

  findOne(cod: string) {
    return this.repository.find(cod);
  }

  update(cod: string, datas: UpdateQuotaDto) {

    return this.repository.update(cod, datas)
    .then((sucess) =>  {return {"message": sucess, "code": HttpStatus.OK}})
    .catch((error) => {return {"message": error, "code" :HttpStatus.BAD_REQUEST}});

  }

  remove(cod: string) {
    return this.repository.delete(cod)
    .then((sucess) =>  {return {"message": sucess, "code": HttpStatus.OK}})
    .catch((error) => {return {"message": error, "code" :HttpStatus.BAD_REQUEST}});
  }
}
