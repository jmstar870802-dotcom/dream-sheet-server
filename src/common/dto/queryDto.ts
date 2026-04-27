// sheet/dto/query-sheet.dto.ts
import { IsOptional, IsString, IsInt, IsIn, Min } from "class-validator";
import { Type } from "class-transformer";

export class QuerySheetDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  key?: string;

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
  @IsIn(["title", "key", "lyrics", "id"])
  sortKey?: string = "id";

  @IsOptional()
  @IsIn(["asc", "desc"])
  sortDir?: "asc" | "desc" = "asc";
}
