import { QuotaDto } from "src/dtos/quota.dto";
export declare class Quota {
    value: number;
    description: string;
    count_title: number;
    id: number;
    constructor(quota: QuotaDto);
}
