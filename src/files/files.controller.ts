import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from './multer-config';
import { Request } from 'express';
import * as fs from 'fs';
import { join } from 'path';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('foto', multerConfig))
  uploadCarImage(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    return this.filesService.saveData(file, req);
  }

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const file = await this.filesService.findOne(+id);
    return JSON.stringify(
      `data:image/jpg;base64,${fs.readFileSync(
        join(`${process.cwd()}/${file.url}`),
        {
          encoding: 'base64',
        },
      )}`,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }
}
