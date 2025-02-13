// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración detallada de CORS
  app.enableCors({
    origin: [
      'http://localhost:4200',  // URL de desarrollo de Angular
      'https://tu-app-angular.com', // URL de producción de Angular (reemplazar con tu dominio real)
      // Agrega más orígenes permitidos según necesites
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
    credentials: true, // Importante para manejar cookies/auth headers
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
    exposedHeaders: ['Content-Disposition'], // Si necesitas exponer headers específicos
    maxAge: 3600, // Tiempo de cache para preflight requests (en segundos)
    preflightContinue: false,
  });

  // Configurar el puerto
  const port = process.env.PORT || 3000;
  
  // Habilitar trust proxy para Railway
  app.enableShutdownHooks();
  app.getHttpAdapter().getInstance().set('trust proxy', 1);

  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();