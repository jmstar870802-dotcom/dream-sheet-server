"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const conti_entity_1 = require("../entities/conti.entity");
class CreateContiDto extends (0, mapped_types_1.PickType)(conti_entity_1.ContiModel, [
    "contiDate",
    "contiNote",
    "contiNotation",
    "conti_img_url",
    "SheetId",
]) {
}
exports.CreateContiDto = CreateContiDto;
//# sourceMappingURL=create-conti.dto.js.map