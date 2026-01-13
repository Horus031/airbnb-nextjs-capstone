import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  @ApiProperty()
  tenPhong: string;
  @IsNotEmpty()
  @ApiProperty()
  khach: number;
  @IsNotEmpty()
  @ApiProperty()
  phongNgu: number;
  @IsNotEmpty()
  @ApiProperty()
  giuong: number;
  @IsNotEmpty()
  @ApiProperty()
  phongTam: number;
  @ApiProperty()
  moTa: string;
  @ApiProperty()
  giaTien: number;
  @ApiProperty()
  mayGiat: boolean;
  @ApiProperty()
  banLa: boolean;
  @ApiProperty()
  tivi: boolean;
  @ApiProperty()
  dieuHoa: boolean;
  @ApiProperty()
  wifi: boolean;
  @ApiProperty()
  bep: boolean;
  @ApiProperty()
  doXe: boolean;
  @ApiProperty()
  hoBoi: boolean;
  @ApiProperty()
  banUi: boolean;
  @ApiProperty()
  maViTri: number;
  @ApiProperty()
  hinhAnh: string;
}
