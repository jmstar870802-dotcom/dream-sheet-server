// 콘티 수정 요청 DTO
import { IsArray, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OmitType, PartialType } from "@nestjs/mapped-types";
import { CreateContiDto } from "./create-conti.dto";
import { UpdateContiDtlDto } from "./update-conti-dtl.dto";

export class UpdateContiDto extends PartialType(OmitType(CreateContiDto, ["contiDtl"] as const)) {
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateContiDtlDto)
  contiDtl?: UpdateContiDtlDto[];
}