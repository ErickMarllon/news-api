import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './environment-config.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/.env.${process.env.NODE_ENV}`,
      validate,
    }),
  ],
  exports: [ConfigModule],
})
export class EnvironmentConfigModule {}
