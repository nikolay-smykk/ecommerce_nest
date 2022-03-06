import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log('server state on PORT ' + PORT));
}

start();
