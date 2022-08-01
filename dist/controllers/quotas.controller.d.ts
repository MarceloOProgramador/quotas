import { CreateQuotaDto } from '../dtos/quota.create.dto';
import { UpdateQuotaDto } from '../dtos/quota.create.dto';
export declare class QuotasController {
    private quotasService;
    constructor();
    create(createQuotaDto: CreateQuotaDto): import("@nestjs/common").HttpStatus.CREATED | import("@nestjs/common").HttpStatus.INTERNAL_SERVER_ERROR;
    findAll(): Promise<any[]>;
    findOne(cod: string): Promise<any>;
    update(cod: string, updateQuotaDto: UpdateQuotaDto): Promise<{
        message: any;
        code: import("@nestjs/common").HttpStatus;
    } | {
        message: any;
        code: import("@nestjs/common").HttpStatus;
    }>;
    remove(id: string): string;
}
