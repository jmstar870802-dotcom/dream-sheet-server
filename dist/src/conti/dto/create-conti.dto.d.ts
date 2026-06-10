import { ContiModel } from "../entities/conti.entity";
declare const CreateContiDto_base: import("@nestjs/mapped-types").MappedType<Pick<ContiModel, "contiDate" | "contiNote" | "contiNotation" | "conti_img_url" | "SheetId">>;
export declare class CreateContiDto extends CreateContiDto_base {
}
export {};
