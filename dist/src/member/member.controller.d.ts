import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
export declare class MemberController {
    private readonly memberService;
    constructor(memberService: MemberService);
    private readonly logger;
    findAll(): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    login(createMemberDto: CreateMemberDto): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    create(createMemberDto: CreateMemberDto): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    update(id: string, updateMemberDto: UpdateMemberDto): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        userName: string;
        birthday: string;
        mngrSe: string;
    }>;
}
