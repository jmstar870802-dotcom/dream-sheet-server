import { ContiService } from "./conti.service";
import { CreateContiDto } from "./dto/create-conti.dto";
import { UpdateContiDto } from "./dto/update-conti.dto";
import { QueryContiDto } from "./dto/query-conti.dto";
export declare class ContiController {
    private readonly contiService;
    constructor(contiService: ContiService);
    findAll(query: QueryContiDto): Promise<import("../common/entities/paginatedResult").PaginatedResult<any>>;
    findOne(id: string): Promise<{
        contiDtl: ({
            sheet: {
                id: number;
                title: string;
                key: string;
                lyrics: string;
                notation: string;
                img_url: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            contiNotation: string;
            conti_img_url: string;
            contiOrder: number;
            ContiId: number;
            SheetId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        contiDate: string;
        contiNote: string;
        contiLeader: string;
    }>;
    create(createContiDto: CreateContiDto): Promise<{
        contiDtl: ({
            sheet: {
                id: number;
                title: string;
                key: string;
                lyrics: string;
                notation: string;
                img_url: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            contiNotation: string;
            conti_img_url: string;
            contiOrder: number;
            ContiId: number;
            SheetId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        contiDate: string;
        contiNote: string;
        contiLeader: string;
    }>;
    update(id: string, updateContiDto: UpdateContiDto): Promise<({
        contiDtl: ({
            sheet: {
                id: number;
                title: string;
                key: string;
                lyrics: string;
                notation: string;
                img_url: string;
                createdAt: Date;
                updatedAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            contiNotation: string;
            conti_img_url: string;
            contiOrder: number;
            ContiId: number;
            SheetId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        contiDate: string;
        contiNote: string;
        contiLeader: string;
    }) | null>;
    remove(id: string): Promise<void>;
}
