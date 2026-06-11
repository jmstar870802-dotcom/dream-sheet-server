// 콘티 상세(곡 순서) 데이터 모델 및 유효성 검사 정의
import { IsNotEmpty, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { emptyValidationMessage } from "src/common/validation-message/empty-validation.message";

export class ContiDtlModel {
  id: number;

  @IsOptional()
  @IsString()
  contiNotation: string;

  @IsOptional()
  @IsString()
  conti_img_url: string;

  @IsNotEmpty({ message: emptyValidationMessage })
  @IsInt()
  @Type(() => Number)
  contiOrder: number;

  @IsNotEmpty({ message: emptyValidationMessage })
  @IsInt()
  @Type(() => Number)
  SheetId: number;
}