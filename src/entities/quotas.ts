import { QuotaDto } from "src/dtos/quota.dto";

export class Quota {
    public value : number;
    public description: string;
    public count_title: number;

    constructor(
        quota: QuotaDto
    ){
        this.value = quota.value;
        this.description = quota.description;
        this.count_title = quota.count_title;
    }

}