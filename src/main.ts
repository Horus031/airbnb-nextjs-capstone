import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './common/constants/app.constant';
import { ProtectGuard } from './common/guard/protect/protect.guard';
import { CheckPermissionGuard } from './common/guard/check-permission/check-permission.guard';
import { ValidationPipe } from '@nestjs/common';
import { ResponseSuccessInterceptor } from './common/interceptors/response-success.interceptor';
import { initSwagger } from './common/swagger/init.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new ProtectGuard(reflector));
  app.useGlobalGuards(new CheckPermissionGuard(reflector));
  app.useGlobalPipes(
    new ValidationPipe({
      // Bật chức năng chuyển kiểu dữ liệu được gửi từ Front-End
      transform: true,
      transformOptions: {
        // Tự suy ra kiểu dữ liệu của biến (DTO)
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalInterceptors(new ResponseSuccessInterceptor(reflector));

  app.setGlobalPrefix('api');

  initSwagger(app);

  const port = PORT || 3012;
  await app.listen(port, '0.0.0.0');
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📖 Swagger docs: http://localhost:${port}/docs`);
}
void bootstrap();
