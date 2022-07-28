import { CreateQuotaDto } from './dto/create-quota.dto';
import { UpdateQuotaDto } from './dto/update-quota.dto';
export declare class QuotasService {
    create(createQuotaDto: CreateQuotaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQuotaDto: UpdateQuotaDto): string;
    remove(id: number): string;
}
