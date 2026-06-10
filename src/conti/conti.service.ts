// 콘티 CRUD 비즈니스 로직 서비스
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PaginatedResult } from "src/common/entities/paginatedResult";
import { Prisma } from "generated/prisma/client";
import { CreateContiDto } from "./dto/create-conti.dto";
import { UpdateContiDto } from "./dto/update-conti.dto";
import { QueryContiDto } from "./dto/query-conti.dto";

@Injectable()
export class ContiService {
  constructor(private prisma: PrismaService) {}

  async findAll(dto: QueryContiDto): Promise<PaginatedResult<any>> {
    const {
      SheetId,
      contiDate,
      page = 1,
      limit = 10,
      sortKey = "id",
      sortDir = "asc",
    } = dto;

    const where: Prisma.ContiWhereInput = {
      ...(SheetId && { SheetId }),
      ...(contiDate && {
        contiDate: { contains: contiDate },
      }),
    };

    const [total, data] = await this.prisma.$transaction([
      this.prisma.conti.count({ where }),
      this.prisma.conti.findMany({
        where,
        orderBy: { [sortKey]: sortDir },
        skip: (page - 1) * limit,
        take: limit,
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
    const conti = await this.prisma.conti.findUnique({ where: { id } });
    if (!conti) {
      throw new NotFoundException(`${id}번 콘티는 존재하지 않습니다.`);
    }
    return conti;
  }

  async create(createContiDto: CreateContiDto) {
    return await this.prisma.conti.create({ data: createContiDto });
  }

  async update(id: number, updateContiDto: UpdateContiDto) {
    await this.findOne(id);
    return await this.prisma.conti.update({
      where: { id },
      data: updateContiDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.prisma.conti.delete({ where: { id } });
  }
}
