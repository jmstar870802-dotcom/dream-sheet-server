// 콘티 모듈 선언
import { Module } from "@nestjs/common";
import { ContiService } from "./conti.service";
import { ContiController } from "./conti.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: [ContiController],
  providers: [ContiService, PrismaService],
})
export class ContiModule {}
