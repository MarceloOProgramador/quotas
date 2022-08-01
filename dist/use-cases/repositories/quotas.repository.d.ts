import { RepositoryInterface } from "./repository.interface";
import { Quota } from "src/entities/quotas";
export default class QuotaRepository implements RepositoryInterface {
    find(cod: string): Promise<any>;
    findAll(): Promise<any[]>;
    create(quota: Quota): Promise<boolean>;
    update(cod: string, datas: Object): Promise<any>;
    delete(cod: string): Promise<any>;
}
