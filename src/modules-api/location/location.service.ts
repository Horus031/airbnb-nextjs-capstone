/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { buildQuery } from 'src/common/helper/build-query.helper';
import { QueryDto } from '../room/dto/query.dto';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}
  async createLocation(createLocationDto: CreateLocationDto) {
    const { tenViTri, tinhThanh, quocGia, hinhAnh } = createLocationDto;

    const newLocation = await this.prisma.viTri.create({
      data: {
        ten_vi_tri: tenViTri,
        tinh_thanh: tinhThanh,
        quoc_gia: quocGia,
        hinh_anh: hinhAnh,
      },
    });

    return newLocation;
  }

  findAll() {
    const result = this.prisma.viTri.findMany();

    return result;
  }

  async findAllPagination(queryDto: QueryDto) {
    const { page, pageSize, index, filters } = buildQuery(queryDto);

    const locationPromise = await this.prisma.viTri.findMany({
      where: {
        ten_vi_tri: filters,
      },
      skip: index,
      take: pageSize,
    });

    const totalItemsPromise = await this.prisma.phong.count();

    const [location, totalItems] = await Promise.all([
      locationPromise,
      totalItemsPromise,
    ]);

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      page: page,
      pageSize: pageSize,
      totalItems: totalItems,
      totalPage: totalPages,
      items: location || [],
    };
  }

  async findOneById(id: number) {
    const locationExists = await this.prisma.viTri.findUnique({
      where: {
        id: id,
      },
    });

    if (!locationExists) {
      throw new BadRequestException(
        `Vị trí với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    return locationExists;
  }

  async updateLocation(id: number, updateLocationDto: UpdateLocationDto) {
    const locationExist = await this.prisma.viTri.findUnique({
      where: {
        id: id,
      },
    });

    if (!locationExist) {
      throw new BadRequestException(
        `Vị trí với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    const { tenViTri, tinhThanh, quocGia, hinhAnh } = updateLocationDto;

    const updatedLocation = await this.prisma.viTri.update({
      where: {
        id: id,
      },

      data: {
        ten_vi_tri: tenViTri,
        tinh_thanh: tinhThanh,
        quoc_gia: quocGia,
        hinh_anh: hinhAnh,
      },
    });

    return updatedLocation;
  }

  async removeLocation(id: number) {
    const locationExists = await this.prisma.viTri.findUnique({
      where: {
        id: id,
      },
    });

    if (!locationExists) {
      throw new BadRequestException(
        `Không thể xóa vị trí có ID là ${id} vì nó không tồn tại, vui lòng thử lại`,
      );
    }

    await this.prisma.viTri.delete({
      where: {
        id: id,
      },
    });

    return true;
  }
}
