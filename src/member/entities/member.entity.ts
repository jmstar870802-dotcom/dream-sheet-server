// Member 도메인 모델 및 유효성 검사 클래스
import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { emptyValidationMessage } from "src/common/validation-message/empty-validation.message";

export class MemberModel {
  id: number;

  @IsNotEmpty({ message: emptyValidationMessage })
  @IsString()
  userName: string;

  @IsNotEmpty({ message: emptyValidationMessage })
  @IsString()
  birthday: string;

  
  mngrSe: string;
}
