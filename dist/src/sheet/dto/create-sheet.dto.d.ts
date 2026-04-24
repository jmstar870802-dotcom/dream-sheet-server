import { SheetModel } from "../entities/sheet.entity";
declare const CreateSheetDto_base: import("@nestjs/mapped-types").MappedType<Pick<SheetModel, "title" | "key" | "lyrics" | "notation" | "img_url">>;
export declare class CreateSheetDto extends CreateSheetDto_base {
}
export {};
