import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules-api/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProtectStrategy } from './common/guard/protect/protect.strategy';
import { PrismaModule } from './modules-system/prisma/prisma.module';
import { TokenModule } from './modules-system/token/token.module';
import { RoomModule } from './modules-api/room/room.module';
import { CheckPermissionStrategy } from './common/guard/check-permission/check-permission.strategy';
import { LocationModule } from './modules-api/location/location.module';
import { UserModule } from './modules-api/user/user.module';
import { CommentModule } from './modules-api/comment/comment.module';
import { BookingModule } from './modules-api/booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    TokenModule,
    RoomModule,
    LocationModule,
    UserModule,
    CommentModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProtectStrategy, CheckPermissionStrategy],
})
export class AppModule {}
