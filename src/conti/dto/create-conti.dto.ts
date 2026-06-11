// 콘티 생성 요청 DTO
import { IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PickType } from "@nestjs/mapped-types";
import { ContiModel } from "../entities/conti.entity";
import { CreateContiDtlDto } from "./create-conti-dtl.dto";

export class CreateContiDto extends PickType(ContiModel, [
  "contiDate",
  "contiNote",
  "contiLeader",
]) {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateContiDtlDto)
  contiDtl: CreateContiDtlDto[];
}