import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { SheetModule } from './sheet/sheet.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ← 이렇게 하면 PrismaModule에 따로 import 불필요
    }),
    PrismaModule,
    SheetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
