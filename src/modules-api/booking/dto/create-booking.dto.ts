import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  maPhong: number;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  ngayDen: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  ngayDi: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  soLuongKhach: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  maNguoiDung: number;
}
