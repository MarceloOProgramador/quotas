import { repository } from "./repository.interface";

export default class QuotaRepository implements repository {

    async find(cod: string): Promise<any>
    {
        
    }

    async findAll(): Promise<any[]>
    {
        return [];
    }

    async update(cod: string, datas: Object): Promise<any>
    {

    }

    async delete(cod: string): Promise<any>
    {

    }

}