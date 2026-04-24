import { PickType } from "@nestjs/mapped-types";
import { SheetModel } from "../entities/sheet.entity";

export class CreateSheetDto extends PickType(SheetModel, ['title','key','lyrics','notation','img_url']){}
