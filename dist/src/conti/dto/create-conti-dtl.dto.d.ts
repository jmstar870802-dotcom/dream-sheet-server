import { ContiDtlModel } from "../entities/conti-dtl.entity";
declare const CreateContiDtlDto_base: import("@nestjs/mapped-types").MappedType<Pick<ContiDtlModel, "contiNotation" | "conti_img_url" | "contiOrder" | "SheetId">>;
export declare class CreateContiDtlDto extends CreateContiDtlDto_base {
}
export {};
