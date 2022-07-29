import { RepositoryInterface } from "./repository.interface";
import { Quota } from "src/entities/quotas";

export default class QuotaRepository implements RepositoryInterface {

    async find(cod: string): Promise<any>
    {
        
    }

    async findAll(): Promise<any[]>
    {
        return [];
    }

    async create(quota: Quota) {
        
    }

    async update(cod: string, datas: Object): Promise<any>
    {

    }

    async delete(cod: string): Promise<any>
    {

    }

}