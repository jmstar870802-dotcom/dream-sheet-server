// Member 생성 요청 DTO
import { PickType } from "@nestjs/mapped-types";
import { MemberModel } from "../entities/member.entity";

export class CreateMemberDto extends PickType(MemberModel, ['userName', 'birthday', 'mngrSe']) {}
