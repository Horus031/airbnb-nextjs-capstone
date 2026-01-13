/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/await-thenable */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { QueryDto } from './dto/query.dto';
import { buildQuery } from 'src/common/helper/build-query.helper';
import { UploadApiResponse } from 'cloudinary';
import cloudinary from 'src/common/cloudinary/init.cloudinary';

@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  async createRoom(createRoomDto: CreateRoomDto) {
    const {
      tenPhong,
      khach,
      phongNgu,
      giuong,
      phongTam,
      moTa,
      giaTien,
      mayGiat,
      banLa,
      tivi,
      dieuHoa,
      wifi,
      bep,
      doXe,
      hoBoi,
      banUi,
      maViTri,
      hinhAnh,
    } = createRoomDto;

    const locationExists = await this.prisma.viTri.findUnique({
      where: {
        id: maViTri,
      },
    });

    if (!locationExists) {
      throw new BadRequestException(`Vị trí với ID ${maViTri} không tồn tại`);
    }

    const newRoom = await this.prisma.phong.create({
      data: {
        ten_phong: tenPhong,
        khach: khach,
        phong_ngu: phongNgu,
        giuong: giuong,
        phong_tam: phongTam,
        mo_ta: moTa,
        gia_tien: giaTien,
        may_giat: mayGiat,
        ban_la: banLa,
        tivi: tivi,
        dieu_hoa: dieuHoa,
        wifi: wifi,
        bep: bep,
        do_xe: doXe,
        ho_boi: hoBoi,
        ban_ui: banUi,
        ma_vi_tri: maViTri,
        hinh_anh: hinhAnh,
      },
    });

    return newRoom;
  }

  async uploadRoomImage(maPhong: number, file: Express.Multer.File) {
    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: maPhong,
      },
    });

    if (!roomExists) {
      throw new BadRequestException('Phòng không tồn tại, vui lòng thử lại');
    }

    if (roomExists.hinh_anh) {
      await cloudinary.uploader.destroy(roomExists.hinh_anh);
    }

    const uploadResult = await new Promise<UploadApiResponse>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream((error, uploadResult) => {
            if (error) {
              return reject(error);
            }
            return resolve(uploadResult as UploadApiResponse);
          })
          .end(file.buffer);
      },
    );

    await this.prisma.phong.update({
      where: {
        id: maPhong,
      },
      data: {
        hinh_anh: uploadResult.public_id,
      },
    });

    return uploadResult.url;
  }

  async findAll() {
    const result = await this.prisma.phong.findMany();

    return result;
  }

  async findOneByLocation(maViTri: number) {
    const result = await this.prisma.phong.findMany({
      where: {
        ma_vi_tri: maViTri,
      },
    });

    return result;
  }

  async findAllPagination(queryDto: QueryDto) {
    const { page, pageSize, index, filters } = buildQuery(queryDto);

    const roomPromise = await this.prisma.phong.findMany({
      where: {
        ten_phong: filters,
      },
      skip: index,
      take: pageSize,
    });

    const totalItemsPromise = await this.prisma.phong.count();

    const [rooms, totalItems] = await Promise.all([
      roomPromise,
      totalItemsPromise,
    ]);

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      page: page,
      pageSize: pageSize,
      totalItems: totalItems,
      totalPage: totalPages,
      items: rooms || [],
    };
  }

  async findOneById(id: number) {
    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: id,
      },
    });

    if (!roomExists) {
      throw new BadRequestException(
        `Phòng với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    return roomExists;
  }

  async updateRoom(id: number, updateRoomDto: UpdateRoomDto) {
    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: id,
      },
    });

    if (!roomExists) {
      throw new BadRequestException(
        `Phòng với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    const {
      tenPhong,
      khach,
      phongNgu,
      giuong,
      phongTam,
      moTa,
      giaTien,
      mayGiat,
      banLa,
      tivi,
      dieuHoa,
      wifi,
      bep,
      doXe,
      hoBoi,
      banUi,
      maViTri,
      hinhAnh,
    } = updateRoomDto;

    const updatedRoom = await this.prisma.phong.update({
      where: {
        id: id,
      },

      data: {
        ten_phong: tenPhong,
        khach: khach,
        phong_ngu: phongNgu,
        giuong: giuong,
        phong_tam: phongTam,
        mo_ta: moTa,
        gia_tien: giaTien,
        may_giat: mayGiat,
        ban_la: banLa,
        tivi: tivi,
        dieu_hoa: dieuHoa,
        wifi: wifi,
        bep: bep,
        do_xe: doXe,
        ho_boi: hoBoi,
        ban_ui: banUi,
        ma_vi_tri: maViTri,
        hinh_anh: hinhAnh,
      },
    });

    return updatedRoom;
  }

  async removeRoom(id: number) {
    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: id,
      },
    });

    if (!roomExists) {
      throw new BadRequestException(
        `Không thể xóa phòng có ID là ${id} vì nó không tồn tại, vui lòng thử lại`,
      );
    }

    await this.prisma.phong.delete({
      where: {
        id: id,
      },
    });

    return true;
  }
}
