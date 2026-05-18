// Member 수정 요청 DTO
import { PartialType } from "@nestjs/mapped-types";
import { CreateMemberDto } from "./create-member.dto";

export class UpdateMemberDto extends PartialType(CreateMemberDto) {}
