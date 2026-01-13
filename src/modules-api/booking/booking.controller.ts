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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('DatPhong')
@ApiBearerAuth()
@Controller('dat-phong')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ResponseMessage('Đặt phòng thành công')
  createBooking(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.createBooking(createBookingDto);
  }

  @Get()
  @ResponseMessage('Lấy tất cả lịch đặt phòng thành công')
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  @ResponseMessage('Lấy lịch đặt phòng theo ID thành công')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Get('lay-theo-nguoi-dung/:maNguoiDung')
  @ResponseMessage('Lấy lịch đặt phòng của người dùng thành công')
  findOneByUserId(@Param('maNguoiDung') maNguoidung: string) {
    return this.bookingService.findOneByUserId(+maNguoidung);
  }

  @Put(':id')
  @ResponseMessage('Cập nhật lịch đặt phòng thành công')
  updateBooking(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
  ) {
    return this.bookingService.updateBooking(+id, updateBookingDto);
  }

  @Delete(':id')
  @ResponseMessage('Xóa lịch đặt phòng thành công')
  removeBooking(@Param('id') id: string) {
    return this.bookingService.removeBooking(+id);
  }
}
