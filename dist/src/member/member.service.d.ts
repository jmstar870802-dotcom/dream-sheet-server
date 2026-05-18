import { PrismaService } from "../prisma/prisma.service";
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
export declare class MemberService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    login(dto: CreateMemberDto): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    create(dto: CreateMemberDto): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    update(id: number, dto: UpdateMemberDto): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
}
