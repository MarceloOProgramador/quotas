"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quotas_mocks_1 = require("../mocks/quotas.mocks");
class QuotaRepository {
    async find(cod) {
        return quotas_mocks_1.all_quotas.filter((quota) => quota.cod === cod);
    }
    async findAll() {
        return quotas_mocks_1.all_quotas;
    }
    async create(quota) {
        const prev_lenght = quotas_mocks_1.quotas.length;
        if (quotas_mocks_1.quotas.push(quota) == prev_lenght)
            false;
        return true;
    }
    async update(cod, datas) {
        const index = quotas_mocks_1.all_quotas.findIndex((quota) => quota.cod === cod);
        if (index == -1)
            return Promise.reject("Erro ao atualizar!");
        quotas_mocks_1.quotas[index] = datas;
        return Promise.resolve("Atualizado com sucesso!");
    }
    async delete(cod) {
        const index = quotas_mocks_1.all_quotas.findIndex((quota) => quota.cod === cod);
        const deleted = quotas_mocks_1.all_quotas.splice(index, 1);
        if (index == -1 || !deleted)
            return Promise.reject("Erro ao deletar!");
        return Promise.resolve("Deletado com sucesso!");
    }
}
exports.default = QuotaRepository;
//# sourceMappingURL=quotas.repository.js.map