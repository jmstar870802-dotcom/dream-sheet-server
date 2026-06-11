// 콘티 상세 수정 요청 DTO (id 포함 - 기존 항목 구분용)
import { IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CreateContiDtlDto } from "./create-conti-dtl.dto";

export class UpdateContiDtlDto extends CreateContiDtlDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
