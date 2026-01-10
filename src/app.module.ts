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

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    PrismaModule,
    TokenModule,
    RoomModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProtectStrategy, CheckPermissionStrategy],
})
export class AppModule {}
