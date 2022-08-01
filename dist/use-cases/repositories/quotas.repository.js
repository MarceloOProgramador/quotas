"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quotas_mocks_1 = require("../mocks/quotas.mocks");
class QuotaRepository {
    async find(cod) {
    }
    async findAll() {
        return quotas_mocks_1.find_all_quotas;
    }
    async create(quota) {
        const prev_lenght = quotas_mocks_1.quotas.length;
        if (quotas_mocks_1.quotas.push(quota) == prev_lenght)
            false;
        return true;
    }
    async update(cod, datas) {
    }
    async delete(cod) {
    }
}
exports.default = QuotaRepository;
//# sourceMappingURL=quotas.repository.js.map