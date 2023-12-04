import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    return await this.prisma.car.create({
      data: {
        nome: createCarDto.nome,
        marca: createCarDto.marca,
        ano: +createCarDto.ano,
        imageId: +createCarDto.imageId,
      },
    });
  }

  async findAll() {
    return await this.prisma.car.findMany({ include: { image: true } });
  }

  async findOne(id: number) {
    return await this.prisma.car.findUnique({ where: { id } });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
