import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Quận 1' })
  tenViTri: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Hồ Chí Minh' })
  tinhThanh: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Việt Nam' })
  quocGia: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'https://example.com/image.jpg', required: false })
  hinhAnh?: string;
}
