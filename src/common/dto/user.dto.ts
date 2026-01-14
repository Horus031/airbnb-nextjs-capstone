import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'Nguyễn Văn A' })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'nguyenvana@gmail.com' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'password123' })
  password: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '0901234567', required: false })
  phone: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '01/01/1990', required: false })
  birthday: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: '1: Nam, 2: Nữ, 3: Không muốn tiết lộ',
  })
  gender: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: 2,
    description: '1: Admin, 2: User',
    required: false,
  })
  role: number;
}
