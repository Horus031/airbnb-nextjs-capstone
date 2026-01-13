import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ResponseMessage } from 'src/common/decorators/response-message.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags('BinhLuan')
@ApiBearerAuth()
@Controller('binh-luan')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ResponseMessage('Tạo bình luận thành công')
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComments(createCommentDto);
  }

  @Get()
  @ResponseMessage('Lấy tất cả bình luận thành công')
  findAll() {
    return this.commentService.findAll();
  }

  @Get('lay-binh-luan-theo-phong/:maPhong')
  @ResponseMessage('Lấy bình luận theo phòng thành công')
  findOne(@Param('maPhong') maPhong: string) {
    return this.commentService.findByRoom(+maPhong);
  }

  @Put(':id')
  @ResponseMessage('Cập nhật bình luận thành công')
  updateComment(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.updateComment(+id, updateCommentDto);
  }

  @Delete(':id')
  @ResponseMessage('Xóa bình luận thành công')
  removeComment(@Param('id') id: string) {
    return this.commentService.removeComment(+id);
  }
}
