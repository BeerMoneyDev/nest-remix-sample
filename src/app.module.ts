import * as path from 'path';
import { RemixModule } from 'nest-remix';
import { HelloWorldBackend } from './routes/hello-world.server';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@RemixModule({
  publicDir: path.join(process.cwd(), 'public'),
  browserBuildDir: path.join(process.cwd(), 'build/'),
  imports: [],
  controllers: [AppController],
  providers: [HelloWorldBackend, AppService],
})
export class AppModule {}
