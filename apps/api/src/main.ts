import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('PollSite API Documentation')
    .setDescription('Pollsite API description')
    .setVersion('1.0')
    .build();

  app.use(cookieParser()); // enable cookie parsing

  app.enableCors({
    origin: 'http://localhost:5173', // React frontend URL
    credentials: true, // allow cookies
  });
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.BACKEND_PORT ?? 4000);
}
bootstrap();
