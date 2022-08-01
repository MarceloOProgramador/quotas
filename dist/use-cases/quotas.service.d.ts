import { HttpStatus } from '@nestjs/common';
import { CreateQuotaDto, UpdateQuotaDto } from '../dtos/quota.create.dto';
import { RepositoryInterface } from "./repositories/repository.interface";
export declare class QuotasService {
    private repository;
    constructor(repository: RepositoryInterface);
    create(datas: CreateQuotaDto): HttpStatus.CREATED | HttpStatus.INTERNAL_SERVER_ERROR;
    findAll(): Promise<any[]>;
    findOne(cod: string): Promise<any>;
    update(cod: string, datas: UpdateQuotaDto): Promise<{
        message: any;
        code: HttpStatus;
    } | {
        message: any;
        code: HttpStatus;
    }>;
    remove(id: number): string;
}
