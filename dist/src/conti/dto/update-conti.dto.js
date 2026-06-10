"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_conti_dto_1 = require("./create-conti.dto");
class UpdateContiDto extends (0, mapped_types_1.PartialType)(create_conti_dto_1.CreateContiDto) {
}
exports.UpdateContiDto = UpdateContiDto;
//# sourceMappingURL=update-conti.dto.js.map