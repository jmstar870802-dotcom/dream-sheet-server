import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaClientExceptionFilter } from './util/prisma-client-exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  //app Setting
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  //Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,        // DTO에 없는 필드 제거
      transform: true,        // 타입 자동 변환
    }),
  );

  //prismaService
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);


  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
