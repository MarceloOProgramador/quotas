import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../modules/users/users.module';
import { QuotasModule } from '../modules/quotas/quotas.module';
import { TitlesModule } from '../modules/titles/titles.module';
import { ProductsModule } from '../modules/products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule, 
    QuotasModule, 
    TitlesModule, 
    ProductsModule, 
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true
    })
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
