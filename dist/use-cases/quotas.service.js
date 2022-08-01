"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotasService = void 0;
const common_1 = require("@nestjs/common");
let QuotasService = class QuotasService {
    constructor(repository) {
        this.repository = repository;
    }
    ;
    create(datas) {
        if (!this.repository.create(datas))
            return common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        return common_1.HttpStatus.CREATED;
    }
    findAll() {
        return this.repository.findAll();
    }
    findOne(id) {
        return `This action returns a #${id} quota`;
    }
    update(id, updateQuotaDto) {
        return `This action updates a #${id} quota`;
    }
    remove(id) {
        return `This action removes a #${id} quota`;
    }
};
QuotasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], QuotasService);
exports.QuotasService = QuotasService;
//# sourceMappingURL=quotas.service.js.map