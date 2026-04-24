import {IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { emptyValidationMessage } from "src/common/validation-message/empty-validation.message";


const keys = ['C','D','E','F','G','A','Ab','B','Bb'];

export class SheetModel {

  id  : number;

  @IsNotEmpty({
      message: emptyValidationMessage,
  })
  title : string;

  @IsIn(keys,{
      message: "코드(Chord) 입력 값을 확인 해주세요.",
  })
  key : string;

  @IsOptional()
  lyrics : string;

  @IsOptional()
  notation : string;

  @IsOptional()
  img_url : string;

  createdAt: Date;  

  updatedAt: Date;
}


