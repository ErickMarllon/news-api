import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './main/config/swagger';
import * as dotenv from 'dotenv';
import { VersioningType } from '@nestjs/common';
async function bootstrap() {
  dotenv.config();
  const prefix = `${process.env.URI_PREFIX}`;
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix);
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: ['1'] });

  setupSwagger(prefix, port, app);

  await app.listen(port);
}
bootstrap();
