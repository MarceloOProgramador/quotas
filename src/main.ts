import { APP_FILTER, NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //ADD GLOBAL VERSION PREFIX
  app.setGlobalPrefix('/api/v1');

  await app.listen(3000);
}
bootstrap();
