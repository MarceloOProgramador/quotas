import { RepositoryInterface } from "./repository.interface";
import { Quota } from "src/entities/quotas";
import { quotas, all_quotas } from "../mocks/quotas.mocks";
import { QuotaDTO } from "src/dtos/quota.response.dto";

export default class QuotaRepository implements RepositoryInterface {

  async find(cod: string): Promise<QuotaDTO[]> {
    return all_quotas.filter(
      (quota: QuotaDTO) => quota.cod === cod
    );
  }

  async findAll(): Promise<any[]> {
    return all_quotas;
  }

  async create(quota: Quota) {
    const prev_lenght = quotas.length;
    if (quotas.push(quota) == prev_lenght) false;

    return true;
  }

  async update(cod: string, datas: QuotaDTO): Promise<any> {
    const index = all_quotas.findIndex((quota: QuotaDTO) => quota.cod === cod);

    if(index == -1)
        return Promise.reject("Erro ao atualizar!");
    
    quotas[index] = datas;

    return Promise.resolve("Atualizado com sucesso!");
  }

  async delete(cod: string): Promise<any> {

    const index = all_quotas.findIndex((quota: QuotaDTO) => quota.cod === cod);
    const deleted = all_quotas.splice(index, 1);

    if(index == -1 || !deleted)
      return Promise.reject("Erro ao deletar!");

    return Promise.resolve("Deletado com sucesso!");
  }
}
