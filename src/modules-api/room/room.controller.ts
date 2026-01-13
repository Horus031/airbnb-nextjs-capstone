import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { QueryDto } from './dto/query.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileUploadDto } from 'src/common/dto/file.dto';

@ApiTags('Phong')
@ApiBearerAuth()
@Controller('phong-thue')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  @ResponseMessage('Tạo phòng thành công')
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(createRoomDto);
  }

  @Post('upload-hinh-phong')
  @ResponseMessage('Upload hình ảnh phòng thành công')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Ảnh phòng',
    type: FileUploadDto,
  })
  uploadRoomImage(
    @Query('maPhong') maPhong: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.roomService.uploadRoomImage(+maPhong, file);
  }

  @Get()
  @ResponseMessage('Lấy tất cả phòng thành công')
  findAll() {
    return this.roomService.findAll();
  }

  @Get('lay-phong-theo-vi-tri')
  @ResponseMessage('Lấy các phòng theo vị trí thành công')
  findOne(@Query('maViTri') id: string) {
    return this.roomService.findOneByLocation(+id);
  }

  @Get('phan-trang-tim-kiem')
  @ResponseMessage('Lấy tất cả phòng (phân trang) thành công')
  findAllPagination(@Query() query: QueryDto) {
    return this.roomService.findAllPagination(query);
  }

  @Get(':id')
  @ResponseMessage('Lấy phòng theo ID thành công')
  findOneById(@Param('id') id: string) {
    return this.roomService.findOneById(+id);
  }

  @Put(':id')
  @ResponseMessage('Cập nhật thông tin phòng thành công')
  update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.updateRoom(+id, updateRoomDto);
  }

  @Delete(':id')
  @ResponseMessage('Xóa phòng thành công')
  remove(@Param('id') id: string) {
    return this.roomService.removeRoom(+id);
  }
}
