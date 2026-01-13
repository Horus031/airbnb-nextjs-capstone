/* eslint-disable @typescript-eslint/no-misused-promises */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}
  async createComments(createBookingDto: CreateBookingDto) {
    const { maPhong, maNguoiBinhLuan, ngayBinhLuan, noiDung, saoBinhLuan } =
      createBookingDto;

    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: maPhong,
      },
    });

    if (!roomExists) {
      throw new BadRequestException(
        `Phòng với ID ${maPhong} không tồn tại, vui lòng thử lại`,
      );
    }

    const newComment = await this.prisma.binhLuan.create({
      data: {
        ma_phong: maPhong,
        ma_nguoi_binh_luan: maNguoiBinhLuan,
        ...(ngayBinhLuan !== null && ngayBinhLuan !== ''
          ? { ngay_binh_luan: ngayBinhLuan }
          : {}),
        noi_dung: noiDung,
        sao_binh_luan: saoBinhLuan,
      },
    });

    return newComment;
  }

  async findAll() {
    const result = await this.prisma.binhLuan.findMany();

    return result;
  }

  async findByRoom(maPhong: number) {
    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: maPhong,
      },
    });

    if (!roomExists) {
      throw new BadRequestException(
        `Phòng với ID ${maPhong} không tồn tại, vui lòng thử lại`,
      );
    }

    const commentsByRoom = this.prisma.binhLuan.findMany({
      where: {
        ma_phong: maPhong,
      },
    });

    return commentsByRoom;
  }

  async updateComment(id: number, updateBookingDto: UpdateBookingDto) {
    const commentExists = await this.prisma.binhLuan.findUnique({
      where: {
        id: id,
      },
    });

    if (!commentExists) {
      throw new BadRequestException(
        `Bình luận với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    const { maPhong, maNguoiBinhLuan, ngayBinhLuan, noiDung, saoBinhLuan } =
      updateBookingDto;

    const updatedLocation = await this.prisma.binhLuan.update({
      where: {
        id: id,
      },

      data: {
        ma_phong: maPhong,
        ma_nguoi_binh_luan: maNguoiBinhLuan,
        ...(ngayBinhLuan !== null && ngayBinhLuan !== ''
          ? { ngay_binh_luan: ngayBinhLuan }
          : { ngay_binh_luan: Date.now().toLocaleString() }),
        noi_dung: noiDung,
        sao_binh_luan: saoBinhLuan,
      },
    });

    return updatedLocation;
  }

  async removeComment(id: number) {
    const commentExists = await this.prisma.binhLuan.findUnique({
      where: {
        id: id,
      },
    });

    if (!commentExists) {
      throw new BadRequestException(
        `Không thể xóa bình luận có ID là ${id} vì nó không tồn tại, vui lòng thử lại`,
      );
    }

    await this.prisma.binhLuan.delete({
      where: {
        id: id,
      },
    });

    return true;
  }
}
