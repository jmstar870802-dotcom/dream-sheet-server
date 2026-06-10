import { PrismaService } from "../prisma/prisma.service";
import { PaginatedResult } from "../common/entities/paginatedResult";
import { CreateContiDto } from "./dto/create-conti.dto";
import { UpdateContiDto } from "./dto/update-conti.dto";
import { QueryContiDto } from "./dto/query-conti.dto";
export declare class ContiService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(dto: QueryContiDto): Promise<PaginatedResult<any>>;
    findOne(id: number): Promise<{
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
    update(id: number, updateContiDto: UpdateContiDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        contiDate: string;
        contiNote: string;
        contiNotation: string;
        conti_img_url: string;
        SheetId: number;
    }>;
    remove(id: number): Promise<void>;
}
