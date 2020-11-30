import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  dotenv.config();
  console.table([process.env.ELASTIC_SEARCH_URL]);
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Unpeeling API')
    .setDescription('The unpeeling API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
