import { CreateQuotaDto, UpdateQuotaDto } from '../dtos/quota.create.dto';
export declare class QuotasService {
    create(createQuotaDto: CreateQuotaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQuotaDto: UpdateQuotaDto): string;
    remove(id: number): string;
}
