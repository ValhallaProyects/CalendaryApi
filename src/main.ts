import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/* Docs : 
      1° - https://docs.nestjs.com/techniques/validation
      2° - https://docs.nestjs.com/security/authentication#enable-authentication-globally
      3° - https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript
      3° - https://sequelize.org/api/v7/classes/model
      4° - https://jsdoc.app/tags-type.html
      5° - https://sebhastian.com/sequelize-validate/
      6° - https://stackoverflow.com/questions/69049630/sequelize-with-typescript-can-not-use-create-with-type-attributes
      7° - https://betterprogramming.pub/jwt-and-passport-jwt-strategy-for-your-nestjs-rest-api-project-cafa9dd59890
      8° - https://docs.nestjs.com/security/authentication#enable-authentication-globally
*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe()); // Validate DTOs.

  const config = new DocumentBuilder()
    .setTitle('Calendary docs')
    .setDescription('The Calendary API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { showRequestDuration: true },
  });

  await app.listen(3000);
}
bootstrap();
