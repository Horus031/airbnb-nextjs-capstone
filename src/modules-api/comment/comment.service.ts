import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private readonly prisma: PrismaService) {}

  // Helper function to convert date input to valid Date object
  private parseDate(
    dateInput: string | number | Date | undefined | null,
  ): Date | undefined {
    if (!dateInput || dateInput === '') {
      return undefined;
    }

    // If it's already a Date object
    if (dateInput instanceof Date) {
      return dateInput;
    }

    // If it's a number (timestamp)
    if (typeof dateInput === 'number') {
      return new Date(dateInput);
    }

    // If it's a string
    if (typeof dateInput === 'string') {
      // Remove commas if present (e.g., "1,768,377,900,466" -> "1768377900466")
      const cleanedString = dateInput.replace(/,/g, '');

      // Check if it's a numeric timestamp string
      if (/^\d+$/.test(cleanedString)) {
        return new Date(Number(cleanedString));
      }

      // Try parsing as ISO string
      const parsed = new Date(dateInput);
      if (!isNaN(parsed.getTime())) {
        return parsed;
      }
    }

    return undefined;
  }

  async createComments(createCommentDto: CreateCommentDto) {
    const { maPhong, maNguoiBinhLuan, ngayBinhLuan, noiDung, saoBinhLuan } =
      createCommentDto;

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

    const parsedDate = this.parseDate(ngayBinhLuan);

    const newComment = await this.prisma.binhLuan.create({
      data: {
        ma_phong: maPhong,
        ma_nguoi_binh_luan: maNguoiBinhLuan,
        ...(parsedDate ? { ngay_binh_luan: parsedDate } : {}),
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

  async updateComment(id: number, updateCommentDto: UpdateCommentDto) {
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
      updateCommentDto;

    const parsedDate = this.parseDate(ngayBinhLuan) || new Date();

    const updatedLocation = await this.prisma.binhLuan.update({
      where: {
        id: id,
      },
      data: {
        ma_phong: maPhong,
        ma_nguoi_binh_luan: maNguoiBinhLuan,
        ngay_binh_luan: parsedDate,
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
