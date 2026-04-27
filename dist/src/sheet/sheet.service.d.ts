import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
import { PrismaService } from "../prisma/prisma.service";
import { PaginatedResult } from "../common/entities/paginatedResult";
import { QuerySheetDto } from "../common/dto/queryDto";
export declare class SheetService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllSheet(dto: QuerySheetDto): Promise<PaginatedResult<any>>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    create(createSheetDto: CreateSheetDto): Promise<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateSheetDto: UpdateSheetDto): Promise<{
        id: number;
        title: string;
        key: string;
        lyrics: string;
        notation: string;
        img_url: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<void>;
}
