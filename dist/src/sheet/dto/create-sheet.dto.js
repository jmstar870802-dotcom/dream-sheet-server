"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSheetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const sheet_entity_1 = require("../entities/sheet.entity");
class CreateSheetDto extends (0, mapped_types_1.PickType)(sheet_entity_1.SheetModel, ['title', 'key', 'lyrics', 'notation', 'img_url']) {
}
exports.CreateSheetDto = CreateSheetDto;
//# sourceMappingURL=create-sheet.dto.js.map