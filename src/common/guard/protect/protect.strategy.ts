/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ACCESS_TOKEN_SECRET } from 'src/common/constants/app.constant';
import { PrismaService } from 'src/modules-system/prisma/prisma.service';

@Injectable()
export class ProtectStrategy extends PassportStrategy(Strategy, 'protect') {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ACCESS_TOKEN_SECRET as string,
    });
  }

  async validate(payload: any) {
    const { userId } = payload;

    if (!userId) {
      throw new UnauthorizedException('Token không hợp lệ');
    }

    const userExists = await this.prisma.nguoiDung.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new UnauthorizedException('Người dùng không hợp lệ');
    }

    return userExists;
  }
}
