import { CreateQuotaDto } from '../dtos/quota.create.dto';
import { UpdateQuotaDto } from '../dtos/quota.create.dto';
export declare class QuotasController {
    private quotasService;
    constructor();
    create(createQuotaDto: CreateQuotaDto): import("@nestjs/common").HttpStatus.CREATED | import("@nestjs/common").HttpStatus.INTERNAL_SERVER_ERROR;
    findAll(): Promise<any[]>;
    findOne(cod: string): string;
    update(id: string, updateQuotaDto: UpdateQuotaDto): string;
    remove(id: string): string;
}
