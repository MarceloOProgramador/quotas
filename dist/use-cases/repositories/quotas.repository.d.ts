import { RepositoryInterface } from "./repository.interface";
import { Quota } from "src/entities/quotas";
import { QuotaDTO } from "src/dtos/quota.response.dto";
export default class QuotaRepository implements RepositoryInterface {
    find(cod: string): Promise<QuotaDTO[]>;
    findAll(): Promise<any[]>;
    create(quota: Quota): Promise<boolean>;
    update(cod: string, datas: QuotaDTO): Promise<any>;
    delete(cod: string): Promise<any>;
}
