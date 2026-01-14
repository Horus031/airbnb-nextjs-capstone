import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class QueryDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty({ example: 1, description: 'Số trang hiện tại' })
  page: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty({ example: 10, description: 'Số lượng kết quả mỗi trang' })
  pageSize: number;

  @IsJSON()
  @IsOptional()
  @ApiProperty({
    required: false,
    example: '{"tenViTri": "Quận 1", "tinhThanh": "Hồ Chí Minh"}',
    description: 'Bộ lọc dạng JSON string',
  })
  filters?: string;
}
