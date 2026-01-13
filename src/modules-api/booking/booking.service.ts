import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private readonly prisma: PrismaService) {}
  async createBooking(createBookingDto: CreateBookingDto) {
    const { maPhong, ngayDen, ngayDi, soLuongKhach, maNguoiDung } =
      createBookingDto;

    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: maPhong,
      },
    });

    if (!roomExists) {
      throw new BadRequestException('Phòng không tồn tại, vui lòng thử lại');
    }

    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        id: maNguoiDung,
      },
    });

    if (!userExists) {
      throw new BadRequestException(
        'Người dùng không tồn tại, vui lòng thử lại',
      );
    }

    const newBooking = await this.prisma.datPhong.create({
      data: {
        ma_phong: maPhong,
        ngay_den: new Date(ngayDen),
        ngay_di: new Date(ngayDi),
        so_luong_khach: soLuongKhach,
        ma_nguoi_dat: maNguoiDung,
      },
    });

    return newBooking;
  }

  async findAll() {
    const result = await this.prisma.datPhong.findMany();

    return result;
  }

  async findOne(id: number) {
    const bookingExist = await this.prisma.datPhong.findUnique({
      where: {
        id: id,
      },
    });

    if (!bookingExist) {
      throw new BadRequestException(
        `Phòng với ID ${id} không tồn tại, vui lòng thử lại`,
      );
    }

    return bookingExist;
  }

  async findOneByUserId(maNguoiDung: number) {
    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        id: maNguoiDung,
      },
    });

    if (!userExists) {
      throw new BadRequestException(
        `Người dùng với không tồn tại, vui lòng thử lại`,
      );
    }

    const bookingSchedule = await this.prisma.datPhong.findMany({
      where: {
        ma_nguoi_dat: maNguoiDung,
      },
    });

    return bookingSchedule;
  }

  async updateBooking(id: number, updateBookingDto: UpdateBookingDto) {
    const bookingExists = await this.prisma.datPhong.findUnique({
      where: {
        id: id,
      },
    });

    if (!bookingExists) {
      throw new BadRequestException(
        'Lịch đặt phòng không tồn tại, vui lòng thử lại',
      );
    }

    const { maPhong, ngayDen, ngayDi, soLuongKhach, maNguoiDung } =
      updateBookingDto;

    const roomExists = await this.prisma.phong.findUnique({
      where: {
        id: maPhong,
      },
    });

    if (!roomExists) {
      throw new BadRequestException('Phòng không tồn tại, vui lòng thử lại');
    }

    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        id: maNguoiDung,
      },
    });

    if (!userExists) {
      throw new BadRequestException(
        'Người dùng không tồn tại, vui lòng thử lại',
      );
    }

    await this.prisma.datPhong.update({
      where: {
        id: id,
      },

      data: {
        ma_phong: maPhong,
        ngay_den: new Date(ngayDen as string),
        ngay_di: new Date(ngayDi as string),
        so_luong_khach: soLuongKhach,
        ma_nguoi_dat: maNguoiDung,
      },
    });

    return true;
  }

  async removeBooking(id: number) {
    const bookingExists = await this.prisma.datPhong.findUnique({
      where: {
        id: id,
      },
    });

    if (!bookingExists) {
      throw new BadRequestException(
        'Lịch đặt phòng không tồn tại, vui lòng thử lại',
      );
    }

    await this.prisma.datPhong.delete({
      where: {
        id: id,
      },
    });

    return true;
  }
}
