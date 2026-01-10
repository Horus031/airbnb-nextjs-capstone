import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from 'src/common/constants/app.constant';

@Injectable()
export class TokenService {
  createTokens(userId: number) {
    // Hạn sử dụng của access token
    // cần được giảm xuống đáng kể
    // để giảm thiểu rủi ro khi bị lộ
    // thời gian hết hạn tồn tại bao nhiêu thì người dùng rủi ro bấy nhiêu
    const accessToken = jwt.sign(
      { userId: userId },
      ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: '15m',
      },
    );

    // Hạn sử dụng của refresh token
    const refreshToken = jwt.sign(
      { userId: userId },
      REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: '7d',
      },
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  verifyAccessToken(accessToken: string, option?: jwt.VerifyOptions) {
    const decodeAccessToken = jwt.verify(
      accessToken,
      ACCESS_TOKEN_SECRET as string,
      option,
    );
    return decodeAccessToken;
  }

  verifyRefreshToken(refreshToken: string) {
    const decodeRefreshToken = jwt.verify(
      refreshToken,
      REFRESH_TOKEN_SECRET as string,
    );
    return decodeRefreshToken;
  }
}
