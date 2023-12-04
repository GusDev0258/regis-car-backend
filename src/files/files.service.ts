import { Injectable } from '@nestjs/common';
import { UpdateFileDto } from './dto/update-file.dto';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { File } from './entities/file.entity';
import fs from 'fs';

@Injectable()
export class FilesService {
  constructor(private readonly prisma: PrismaService) {}

  async saveData(file: Express.Multer.File, req: Request) {
    const arquivo = new File();
    arquivo.fileName = file.filename;
    arquivo.fileLength = file.size;
    arquivo.fileType = file.mimetype;
    arquivo.url = `/upload/files/${file.filename}`;

    return await this.prisma.file.create({ data: arquivo });
  }

  findAll() {
    return `This action returns all files`;
  }

  async findOne(id: number) {
    return await this.prisma.file.findFirst({ where: { id } });
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
