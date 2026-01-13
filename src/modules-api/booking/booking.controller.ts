import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';

@Controller('binh-luan')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ResponseMessage('Tạo bình luận thành công')
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createComments(createBookingDto);
  }

  @Get()
  @ResponseMessage('Lấy tất cả bình luận thành công')
  findAll() {
    return this.bookingService.findAll();
  }

  @Get('lay-binh-luan-theo-phong/:maPhong')
  @ResponseMessage('Lấy bình luận theo phòng thành công')
  findOne(@Param('maPhong') maPhong: string) {
    return this.bookingService.findByRoom(+maPhong);
  }

  @Put(':id')
  @ResponseMessage('Cập nhật bình luận thành công')
  updateComment(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return this.bookingService.updateComment(+id, updateBookingDto);
  }

  @Delete(':id')
  @ResponseMessage('Xóa bình luận thành công')
  removeComment(@Param('id') id: string) {
    return this.bookingService.removeComment(+id);
  }
}
