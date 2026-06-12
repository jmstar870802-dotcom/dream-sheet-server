// 콘티 CRUD 비즈니스 로직 서비스
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginatedResult } from "src/common/entities/paginatedResult";
import { Prisma } from "generated/prisma/client";
import { CreateContiDto } from "./dto/create-conti.dto";
import { UpdateContiDto } from "./dto/update-conti.dto";
import { QueryContiDto } from "./dto/query-conti.dto";

const contiDtlInclude = {
  contiDtl: {
    include: { sheet: true },
    orderBy: { contiOrder: "asc" as const },
  },
};

@Injectable()
export class ContiService {
  constructor(private prisma: PrismaService) {}

  async findAll(dto: QueryContiDto): Promise<PaginatedResult<any>> {
    const { contiDate, page = 1, limit = 10, sortKey = "contiDate", sortDir = "desc" } = dto;

    const where: Prisma.ContiWhereInput = {
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

  async findOne(id: number) {
    const conti = await this.prisma.conti.findUnique({
      where: { id },
      include: contiDtlInclude,
    });
    if (!conti) {
      throw new NotFoundException(`${id}번 콘티는 존재하지 않습니다.`);
    }
    return conti;
  }

  async create(dto: CreateContiDto) {
    const { contiDtl, ...header } = dto;
    return await this.prisma.conti.create({
      data: {
        ...header,
        contiDtl: { create: contiDtl },
      },
      include: contiDtlInclude,
    });
  }

  async update(id: number, dto: UpdateContiDto) {
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

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.conti.delete({ where: { id } });
  }
}