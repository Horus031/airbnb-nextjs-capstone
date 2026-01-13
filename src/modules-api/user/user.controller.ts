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
import { UserService } from './user.service';
import { UserDto } from 'src/common/dto/user.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { QueryDto } from '../room/dto/query.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ResponseMessage('Tạo người dùng thành công')
  createUser(@Body() createUserDto: UserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @ResponseMessage('Lấy tất cả người dùng thành công')
  findAll() {
    return this.userService.findAll();
  }

  @Get('phan-trang-tim-kiem')
  @ResponseMessage('Lấy người dùng (phân trang) thành công')
  findAllPagination(@Query() query: QueryDto) {
    return this.userService.findAllPagination(query);
  }

  @Get(':id')
  @ResponseMessage('Lấy người dùng thành công')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get('search/:tenNguoiDung')
  @ResponseMessage('Tìm người dùng thành công')
  searchUser(@Param('tenNguoiDung') tenNguoiDung: string) {
    return this.userService.searchUser(tenNguoiDung);
  }

  @Put(':id')
  @ResponseMessage('Thay đổi thông tin người dùng thành công')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  @ResponseMessage('Xóa người dùng thành công')
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
}
