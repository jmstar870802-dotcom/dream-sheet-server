"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContiDtlDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const conti_dtl_entity_1 = require("../entities/conti-dtl.entity");
class CreateContiDtlDto extends (0, mapped_types_1.PickType)(conti_dtl_entity_1.ContiDtlModel, [
    "contiNotation",
    "conti_img_url",
    "contiOrder",
    "SheetId",
]) {
}
exports.CreateContiDtlDto = CreateContiDtlDto;
//# sourceMappingURL=create-conti-dtl.dto.js.map