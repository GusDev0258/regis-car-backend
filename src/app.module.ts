import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { FilesModule } from './files/files.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CarsModule, FilesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
