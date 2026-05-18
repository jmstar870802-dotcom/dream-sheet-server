"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMemberDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const member_entity_1 = require("../entities/member.entity");
class CreateMemberDto extends (0, mapped_types_1.PickType)(member_entity_1.MemberModel, ['userName', 'birthday', 'mngrSe']) {
}
exports.CreateMemberDto = CreateMemberDto;
//# sourceMappingURL=create-member.dto.js.map