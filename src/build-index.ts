import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { ProductsService } from './products/products.service';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const productService = await app.get<ProductsService>(ProductsService);
  await productService.reIndexAll();
  process.exit();
}

bootstrap();
