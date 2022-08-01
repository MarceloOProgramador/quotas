import { QuotaDto } from "src/dtos/quota.dto";
export declare class Quota {
    value: number;
    description: string;
    count_title: number;
    constructor(quota: QuotaDto);
}
