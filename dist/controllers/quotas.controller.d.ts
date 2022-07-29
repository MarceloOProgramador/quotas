import { QuotasService } from '../use-cases/quotas.service';
import { CreateQuotaDto } from '../dtos/quota.create.dto';
import { UpdateQuotaDto } from '../dtos/quota.create.dto';
export declare class QuotasController {
    private readonly quotasService;
    constructor(quotasService: QuotasService);
    create(createQuotaDto: CreateQuotaDto): string;
    findAll(): string;
    findOne(cod: string): string;
    update(id: string, updateQuotaDto: UpdateQuotaDto): string;
    remove(id: string): string;
}
