// 콘티 목록 조회 쿼리 파라미터 DTO
import { IsOptional, IsString, IsInt, IsIn, Min } from "class-validator";
import { Type } from "class-transformer";

export class QueryContiDto {
  @IsOptional()
  @IsString()
  contiDate?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;

  @IsOptional()
  @IsIn(["id", "contiDate"])
  sortKey?: string = "id";

  @IsOptional()
  @IsIn(["asc", "desc"])
  sortDir?: "asc" | "desc" = "asc";
}