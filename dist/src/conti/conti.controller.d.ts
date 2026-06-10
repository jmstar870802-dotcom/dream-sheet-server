import { ContiService } from "./conti.service";
import { CreateContiDto } from "./dto/create-conti.dto";
import { UpdateContiDto } from "./dto/update-conti.dto";
import { QueryContiDto } from "./dto/query-conti.dto";
export declare class ContiController {
    private readonly contiService;
    constructor(contiService: ContiService);
    findAll(query: QueryContiDto): Promise<import("../common/entities/paginatedResult").PaginatedResult<any>>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        contiDate: string;
        contiNote: string;
        contiNotation: string;
        conti_img_url: string;
        SheetId: number;
    }>;
    create(createContiDto: CreateContiDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        contiDate: string;
        contiNote: string;
        contiNotation: string;
        conti_img_url: string;
        SheetId: number;
    }>;
    update(id: string, updateContiDto: UpdateContiDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        contiDate: string;
        contiNote: string;
        contiNotation: string;
        conti_img_url: string;
        SheetId: number;
    }>;
    remove(id: string): Promise<void>;
}
