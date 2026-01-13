import { ApiProperty } from '@nestjs/swagger';
import {
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  maPhong: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  maNguoiBinhLuan: number;

  @IsISO8601()
  @IsOptional()
  @ApiProperty()
  ngayBinhLuan: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  noiDung: string;

  @IsNumber()
  @ApiProperty()
  saoBinhLuan: number;
}
