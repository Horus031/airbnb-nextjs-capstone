import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1, description: 'ID của phòng' })
  maPhong: number;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    example: '2026-01-20',
    description: 'Ngày nhận phòng',
  })
  ngayDen: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    example: '2026-01-25',
    description: 'Ngày trả phòng',
  })
  ngayDi: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 2, description: 'Số lượng khách' })
  soLuongKhach: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 1, description: 'ID của người đặt phòng' })
  maNguoiDung: number;
}
