import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //ADD GLOBAL VERSION PREFIX
  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
