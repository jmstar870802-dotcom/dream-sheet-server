// 콘티 상세 생성 요청 DTO
import { PickType } from "@nestjs/mapped-types";
import { ContiDtlModel } from "../entities/conti-dtl.entity";

export class CreateContiDtlDto extends PickType(ContiDtlModel, [
  "contiNotation",
  "conti_img_url",
  "contiOrder",
  "SheetId",
]) {}