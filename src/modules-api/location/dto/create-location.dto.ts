import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Test' })
  tenViTri: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  tinhThanh: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  quocGia: string;
  @ApiProperty()
  hinhAnh: string;
}
