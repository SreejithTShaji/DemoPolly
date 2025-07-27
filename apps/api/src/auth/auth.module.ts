import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CookieJwtAuthGuard } from './cookie-jwt-auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'MY_SECRET_KEY', // 🔑 move to env in production!
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [AuthService, CookieJwtAuthGuard],
  controllers: [AuthController],
  exports: [CookieJwtAuthGuard, JwtModule],
})
export class AuthModule {}
