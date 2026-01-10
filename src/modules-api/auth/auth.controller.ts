/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Public } from 'src/common/decorators/public.decorator';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  register(@Body() registerDto: RegisterDto) {
    const result = this.authService.register(registerDto);

    return result;
  }

  @Public()
  @Post('signin')
  login(@Body() loginDto: LoginDto) {
    const result = this.authService.login(loginDto);
    return result;
  }

  @Get('get-info')
  getInfo(@Req() req: Request) {
    const result = this.authService.getInfo(req);

    return result;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
