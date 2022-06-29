import { QuotasService } from './quotas.service';
import { CreateQuotaDto } from './dto/create-quota.dto';
import { UpdateQuotaDto } from './dto/update-quota.dto';
export declare class QuotasController {
    private readonly quotasService;
    constructor(quotasService: QuotasService);
    create(createQuotaDto: CreateQuotaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateQuotaDto: UpdateQuotaDto): string;
    remove(id: string): string;
}
