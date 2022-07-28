"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTitleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_title_dto_1 = require("./create-title.dto");
class UpdateTitleDto extends (0, mapped_types_1.PartialType)(create_title_dto_1.CreateTitleDto) {
}
exports.UpdateTitleDto = UpdateTitleDto;
//# sourceMappingURL=update-title.dto.js.map