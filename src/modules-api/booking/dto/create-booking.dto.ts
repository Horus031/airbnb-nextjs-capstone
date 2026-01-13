import {
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsNumber()
  maPhong: number;

  @IsNotEmpty()
  @IsNumber()
  maNguoiBinhLuan: number;

  @IsISO8601()
  @IsOptional()
  ngayBinhLuan: string;

  @IsNotEmpty()
  @IsString()
  noiDung: string;

  @IsNumber()
  saoBinhLuan: number;
}
