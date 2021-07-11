import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule } from '@nestjs/swagger';
import YAML from 'yamljs';
import * as path from 'path';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';
import { createAdmin } from './resources/utils/createAdmin';
import { ErrorLog } from './middlewares';

async function bootstrap() {
  const APP_PORT = PORT || 4000;
  const app =
    USE_FASTIFY === 'true'
      ? await NestFactory.create<NestFastifyApplication>(
          AppModule,
          new FastifyAdapter()
        )
      : await NestFactory.create(AppModule);

  app.enableCors();
  const swagDoc = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('/doc', app, swagDoc);
  app.useGlobalFilters(new ErrorLog());
  await createAdmin();
  if (USE_FASTIFY === 'true') {
    await app.listen(APP_PORT);
  } else {
    app.listen(APP_PORT, () =>
      console.log(`App is running on http://localhost:${APP_PORT}`)
    );
  }
}
bootstrap();
