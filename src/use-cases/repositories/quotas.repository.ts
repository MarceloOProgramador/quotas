import { RepositoryInterface } from "./repository.interface";
import { Quota } from "src/entities/quotas";
import { quotas, find_all_quotas } from "../mocks/quotas.mocks";

export default class QuotaRepository implements RepositoryInterface {

    async find(cod: string): Promise<any>
    {
        
    }

    async findAll(): Promise<any[]>
    {
        return find_all_quotas;
    }

    async create(quota: Quota) {
        const prev_lenght = quotas.length;
        if(quotas.push(quota) == prev_lenght)
            false;
        
        return true;
    }

    async update(cod: string, datas: Object): Promise<any>
    {

    }

    async delete(cod: string): Promise<any>
    {

    }

}