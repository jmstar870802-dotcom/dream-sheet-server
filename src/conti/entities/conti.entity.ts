// 콘티(예배 선곡 묶음) 데이터 모델 및 유효성 검사 정의
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { emptyValidationMessage } from "src/common/validation-message/empty-validation.message";

export class ContiModel {
  id: number;

  @IsNotEmpty({ message: emptyValidationMessage })
  @IsString()
  contiDate: string;

  @IsOptional()
  @IsString()
  contiNote: string;

  @IsOptional()
  @IsString()
  contiLeader: string;

  createdAt: Date;
  updatedAt: Date;
}
