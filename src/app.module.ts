import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SearchModule } from "./search/search.module";
import { ObserverModule } from "./observers/observer.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/unpeeling'),
    ProductsModule,
    SearchModule,
    ObserverModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
