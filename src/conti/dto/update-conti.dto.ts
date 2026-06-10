// 콘티 수정 요청 DTO
import { PartialType } from "@nestjs/mapped-types";
import { CreateContiDto } from "./create-conti.dto";

export class UpdateContiDto extends PartialType(CreateContiDto) {}
