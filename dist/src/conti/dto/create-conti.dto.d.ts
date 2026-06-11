import { ContiModel } from "../entities/conti.entity";
import { CreateContiDtlDto } from "./create-conti-dtl.dto";
declare const CreateContiDto_base: import("@nestjs/mapped-types").MappedType<Pick<ContiModel, "contiDate" | "contiNote" | "contiLeader">>;
export declare class CreateContiDto extends CreateContiDto_base {
    contiDtl: CreateContiDtlDto[];
}
export {};
