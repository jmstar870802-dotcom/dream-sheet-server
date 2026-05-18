import { MemberModel } from "../entities/member.entity";
declare const CreateMemberDto_base: import("@nestjs/mapped-types").MappedType<Pick<MemberModel, "userName" | "birthday" | "mngrSe">>;
export declare class CreateMemberDto extends CreateMemberDto_base {
}
export {};
