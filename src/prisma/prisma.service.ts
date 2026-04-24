import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from 'generated/prisma/client'; 
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
  {
    constructor(private readonly configService: ConfigService) {
      const adapter = new PrismaPg({
        connectionString: configService.get<string>('DATABASE_URL'),
      });

      super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
  
  async onModuleDestroy() {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // Prisma 5.x: beforeExit 제거됨 → NestJS 자체 훅 사용
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}