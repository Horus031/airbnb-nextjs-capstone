/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { TokenService } from 'src/modules-system/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly token: TokenService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { name, email, password, phone, birthday, gender, role } =
      registerDto;

    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      throw new BadRequestException('Email đã tồn tại');
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await this.prisma.nguoiDung.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        phone: phone,
        birthday: birthday,
        genderId: gender,
        roleId: role,
      },
    });

    console.log({ email, password, name, userExists });

    return `Đăng ký thành công, hãy đăng nhập`;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        email,
      },
    });

    if (!userExists) {
      throw new BadRequestException(
        'Người dùng không tồn tại, vui lòng đăng ký',
      );
    }

    if (!userExists.password) {
      throw new BadRequestException('Vui lòng đăng nhập bằng Google');
    }

    const isCorrectPassword = bcrypt.compareSync(password, userExists.password);

    if (!isCorrectPassword) {
      throw new BadRequestException('Password is incorrect');
    }

    const token = this.token.createTokens(userExists.id);

    return token;
  }

  getInfo(req) {
    delete req.user.password;
    return req.user;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
