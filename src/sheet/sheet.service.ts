import { Injectable , NotFoundException} from '@nestjs/common';
import { CreateSheetDto } from './dto/create-sheet.dto';
import { UpdateSheetDto } from './dto/update-sheet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SheetService {

  constructor(private prisma: PrismaService) {}

  async findAllSheet(title: string) {

    const sheet_list = await this.prisma.sheet.findMany({
       where:{
          title : {
             contains: title
          }
       }
    })

    return sheet_list;
  }

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
      throw new NotFoundException(`${id}번 도서는 존재하지 않습니다`);
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
