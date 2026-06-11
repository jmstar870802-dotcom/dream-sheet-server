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
exports.ContiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const contiDtlInclude = {
    contiDtl: {
        include: { sheet: true },
        orderBy: { contiOrder: "asc" },
    },
};
let ContiService = class ContiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(dto) {
        const { contiDate, page = 1, limit = 10, sortKey = "id", sortDir = "asc" } = dto;
        const where = {
            ...(contiDate && { contiDate: { contains: contiDate } }),
        };
        const [total, data] = await this.prisma.$transaction([
            this.prisma.conti.count({ where }),
            this.prisma.conti.findMany({
                where,
                orderBy: { [sortKey]: sortDir },
                skip: (page - 1) * limit,
                take: limit,
                include: contiDtlInclude,
            }),
        ]);
        const totalPages = Math.ceil(total / limit);
        return {
            data,
            meta: {
                total,
                page,
                limit,
                totalPages,
                hasNext: page < totalPages,
                hasPrev: page > 1,
            },
        };
    }
    async findOne(id) {
        const conti = await this.prisma.conti.findUnique({
            where: { id },
            include: contiDtlInclude,
        });
        if (!conti) {
            throw new common_1.NotFoundException(`${id}번 콘티는 존재하지 않습니다.`);
        }
        return conti;
    }
    async create(dto) {
        const { contiDtl, ...header } = dto;
        return await this.prisma.conti.create({
            data: {
                ...header,
                contiDtl: { create: contiDtl },
            },
            include: contiDtlInclude,
        });
    }
    async update(id, dto) {
        await this.findOne(id);
        const { contiDtl, ...header } = dto;
        return await this.prisma.$transaction(async (tx) => {
            await tx.conti.update({ where: { id }, data: header });
            if (contiDtl !== undefined) {
                await tx.contiDtl.deleteMany({ where: { ContiId: id } });
                if (contiDtl.length > 0) {
                    await tx.contiDtl.createMany({
                        data: contiDtl.map(({ id: _id, ...dtl }) => ({ ...dtl, ContiId: id })),
                    });
                }
            }
            return tx.conti.findUnique({ where: { id }, include: contiDtlInclude });
        });
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.conti.delete({ where: { id } });
    }
};
exports.ContiService = ContiService;
exports.ContiService = ContiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContiService);
//# sourceMappingURL=conti.service.js.map