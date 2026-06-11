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
            contiNotation: string | null;
            conti_img_url: string | null;
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
    create(dto: CreateContiDto): Promise<{
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
            contiNotation: string | null;
            conti_img_url: string | null;
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
    update(id: number, dto: UpdateContiDto): Promise<({
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
            contiNotation: string | null;
            conti_img_url: string | null;
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
    remove(id: number): Promise<void>;
}
