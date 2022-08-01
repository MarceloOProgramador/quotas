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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotasController = void 0;
const common_1 = require("@nestjs/common");
const quotas_service_1 = require("../use-cases/quotas.service");
const quotas_repository_1 = require("../use-cases/repositories/quotas.repository");
let QuotasController = class QuotasController {
    constructor() {
        this.quotasService = new quotas_service_1.QuotasService(new quotas_repository_1.default);
    }
    create(createQuotaDto) {
        return this.quotasService.create(createQuotaDto);
    }
    findAll() {
        return this.quotasService.findAll();
    }
    findOne(cod) {
        return this.quotasService.findOne(cod);
    }
    update(cod, updateQuotaDto) {
        return this.quotasService.update(cod, updateQuotaDto);
    }
    remove(id) {
        return this.quotasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuotasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuotasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':cod'),
    __param(0, (0, common_1.Param)('cod')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuotasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':cod'),
    __param(0, (0, common_1.Param)('cod')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], QuotasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuotasController.prototype, "remove", null);
QuotasController = __decorate([
    (0, common_1.Controller)('quotas'),
    __metadata("design:paramtypes", [])
], QuotasController);
exports.QuotasController = QuotasController;
//# sourceMappingURL=quotas.controller.js.map