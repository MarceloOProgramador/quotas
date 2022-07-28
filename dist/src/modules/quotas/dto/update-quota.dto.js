"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuotaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_quota_dto_1 = require("./create-quota.dto");
class UpdateQuotaDto extends (0, mapped_types_1.PartialType)(create_quota_dto_1.CreateQuotaDto) {
}
exports.UpdateQuotaDto = UpdateQuotaDto;
//# sourceMappingURL=update-quota.dto.js.map