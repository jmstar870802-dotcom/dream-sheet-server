"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSheetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sheet_dto_1 = require("./create-sheet.dto");
class UpdateSheetDto extends (0, mapped_types_1.PartialType)(create_sheet_dto_1.CreateSheetDto) {
}
exports.UpdateSheetDto = UpdateSheetDto;
//# sourceMappingURL=update-sheet.dto.js.map