import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { QueryDto } from '../room/dto/query.dto';

@Controller('vi-tri')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  @ResponseMessage('Tạo vị trí mới thành công')
  createLocation(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.createLocation(createLocationDto);
  }

  @Get()
  @ResponseMessage('Lấy tất cả vị trí thành công')
  findAll() {
    return this.locationService.findAll();
  }

  @Get('phan-trang-tim-kiem')
  @ResponseMessage('Lấy vị trí (phân trang) thành công')
  findAllPagination(@Query() query: QueryDto) {
    return this.locationService.findAllPagination(query);
  }

  @Get(':id')
  @ResponseMessage('Lấy vị trí thành công')
  findOne(@Param('id') id: string) {
    return this.locationService.findOneById(+id);
  }

  @Put(':id')
  @ResponseMessage('Cập nhật thông tin thành công')
  updateLocation(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.updateLocation(+id, updateLocationDto);
  }

  @Delete(':id')
  @ResponseMessage('Xóa vị trí thành công')
  removeLocation(@Param('id') id: string) {
    return this.locationService.removeLocation(+id);
  }
}
