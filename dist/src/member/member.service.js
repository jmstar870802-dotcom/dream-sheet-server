"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MemberService = class MemberService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.member.findMany();
    }
    async findOne(id) {
        const member = await this.prisma.member.findUnique({ where: { id } });
        if (!member) {
            throw new common_1.NotFoundException(`${id}번 멤버가 존재하지 않습니다.`);
        }
        return member;
    }
    async login(dto) {
        const birthday = dto.birthday;
        const userName = dto.userName;
        const member = await this.prisma.member.findFirst({
            where: {
                birthday: birthday,
                userName: userName,
            },
        });
        if (!member) {
            throw new common_1.NotFoundException(`멤버가 존재하지 않습니다.`);
        }
        return member;
    }
    async create(dto) {
        return this.prisma.member.create({ data: dto });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.member.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.member.delete({ where: { id } });
    }
};
exports.MemberService = MemberService;
exports.MemberService = MemberService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MemberService);
//# sourceMappingURL=member.service.js.map