// Member CRUD 비즈니스 로직 서비스
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.member.findMany();
  }

  async findOne(id: number) {
    const member = await this.prisma.member.findUnique({ where: { id } });
    if (!member) {
      throw new NotFoundException(`${id}번 멤버가 존재하지 않습니다.`);
    }
    return member;
  }

  async login(dto: CreateMemberDto) {
    
    const birthday = dto.birthday;
    const userName = dto.userName;

    const member = await this.prisma.member.findFirst({ 
      where: {
          birthday : birthday,
          userName : userName,
      },
    });

    if (!member) {
      throw new NotFoundException(`멤버가 존재하지 않습니다.`);
    }
    return member;
  } 

  async create(dto: CreateMemberDto) {
    return this.prisma.member.create({ data: dto });
  }

  async update(id: number, dto: UpdateMemberDto) {
    await this.findOne(id);
    return this.prisma.member.update({ where: { id }, data: dto });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.member.delete({ where: { id } });
  }
}
