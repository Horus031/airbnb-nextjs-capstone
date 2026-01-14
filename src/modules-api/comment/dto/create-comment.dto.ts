import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  maPhong: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  maNguoiBinhLuan: number;

  @ApiProperty({ example: '2026-01-14T00:00:00.000Z', required: false })
  @IsOptional()
  ngayBinhLuan?: string | number | Date;

  @ApiProperty({ example: 'Great room!' })
  @IsString()
  noiDung: string;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @IsOptional()
  saoBinhLuan?: number;
}
