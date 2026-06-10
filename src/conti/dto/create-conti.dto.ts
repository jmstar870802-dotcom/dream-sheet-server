// 콘티 생성 요청 DTO
import { PickType } from "@nestjs/mapped-types";
import { ContiModel } from "../entities/conti.entity";

export class CreateContiDto extends PickType(ContiModel, [
  "contiDate",
  "contiNote",
  "contiNotation",
  "conti_img_url",
  "SheetId",
]) {}
