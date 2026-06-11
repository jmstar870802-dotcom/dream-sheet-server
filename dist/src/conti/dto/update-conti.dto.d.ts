import { CreateContiDto } from "./create-conti.dto";
import { UpdateContiDtlDto } from "./update-conti-dtl.dto";
declare const UpdateContiDto_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateContiDto, "contiDtl">>>;
export declare class UpdateContiDto extends UpdateContiDto_base {
    contiDtl?: UpdateContiDtlDto[];
}
export {};
