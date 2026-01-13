import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class QueryDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty()
  page: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty()
  pageSize: number;

  @IsJSON()
  @IsOptional()
  @ApiProperty({ required: false })
  filters?: string;
}
