import { HttpStatus } from '@nestjs/common';
import { CreateQuotaDto, UpdateQuotaDto } from '../dtos/quota.create.dto';
import { RepositoryInterface } from "./repositories/repository.interface";
export declare class QuotasService {
    private repository;
    constructor(repository: RepositoryInterface);
    create(datas: CreateQuotaDto): HttpStatus.CREATED | HttpStatus.INTERNAL_SERVER_ERROR;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateQuotaDto: UpdateQuotaDto): string;
    remove(id: number): string;
}
