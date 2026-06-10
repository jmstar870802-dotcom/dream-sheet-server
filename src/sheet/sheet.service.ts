import { Injectable , NotFoundException} from '@nestjs/common';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatedResult } from 'src/common/entities/paginatedResult';
import { QuerySheetDto } from 'src/common/dto/queryDto';
import { Prisma } from 'generated/prisma/client'; 

@Injectable()
export class SheetService {

  constructor(private prisma: PrismaService) {}

  async findAllSheet(dto: QuerySheetDto): Promise<PaginatedResult<any>> {
    const {
      title,
      key,
      page = 1,
      limit = 10,
      sortKey = "id",
      sortDir = "asc",
    } = dto;

    // 검색 조건
    const where: Prisma.SheetWhereInput = {
      ...(title && {
        title: {
          contains: title,
          mode: "insensitive", // 대소문자 무시 (PostgreSQL)
        },
      }),
      ...(key && {
        key: {
          equals: key,
          mode: "insensitive",
        },
      }),
    };

    // 전체 카운트 + 데이터 동시 조회 (성능 최적화)
    const [total, data] = await this.prisma.$transaction([
      this.prisma.sheet.count({ where }),
      this.prisma.sheet.findMany({
        where,
        orderBy: { [sortKey]: sortDir },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          title: true,
          key: true,
          lyrics: true,
        },
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

  // async findAllSheet(title: string) {

  //   const sheet_list = await this.prisma.sheet.findMany({
  //      where:{
  //         title : {
  //            contains: title
  //         }
  //      }
  //   })

  //   return sheet_list;
  // }

  async findOne(id: number) {
    const sheet_list = await this.prisma.sheet.findUnique({
       where:{
          id
       }
    })

    return sheet_list;
  }

  async create(createSheetDto: CreateSheetDto) {
    return await this.prisma.sheet.create({data : createSheetDto}); 
  } 

  async update(id: number, updateSheetDto: UpdateSheetDto) {
    
    const beforeUpdateData = await this.prisma.sheet
      .findUnique({
        where: {
          id: id,
        },
      })
      .catch((err) => console.log(err));

    if (!beforeUpdateData) {
      throw new NotFoundException(`${id}번 악보는 존재하지 않습니다.`);
    }

    return await this.prisma.sheet.update({
      where: {
        id: id,
      },
      data: updateSheetDto,
    });
  }

  async remove(id: number) {
    await this.prisma.sheet.delete({
      where: {
        id: id,
      },
    });
  }
}
