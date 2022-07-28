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
exports.TitlesController = void 0;
const common_1 = require("@nestjs/common");
const titles_service_1 = require("./titles.service");
const create_title_dto_1 = require("./dto/create-title.dto");
const update_title_dto_1 = require("./dto/update-title.dto");
let TitlesController = class TitlesController {
    constructor(titlesService) {
        this.titlesService = titlesService;
    }
    create(createTitleDto) {
        return this.titlesService.create(createTitleDto);
    }
    findAll() {
        return this.titlesService.findAll();
    }
    findOne(id) {
        return this.titlesService.findOne(+id);
    }
    update(id, updateTitleDto) {
        return this.titlesService.update(+id, updateTitleDto);
    }
    remove(id) {
        return this.titlesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_title_dto_1.CreateTitleDto]),
    __metadata("design:returntype", void 0)
], TitlesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TitlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TitlesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_title_dto_1.UpdateTitleDto]),
    __metadata("design:returntype", void 0)
], TitlesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TitlesController.prototype, "remove", null);
TitlesController = __decorate([
    (0, common_1.Controller)('titles'),
    __metadata("design:paramtypes", [titles_service_1.TitlesService])
], TitlesController);
exports.TitlesController = TitlesController;
//# sourceMappingURL=titles.controller.js.map