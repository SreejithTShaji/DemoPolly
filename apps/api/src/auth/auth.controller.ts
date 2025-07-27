import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto, ProfileDto } from './auth.dto';
import { Response } from 'express';
import { CookieJwtAuthGuard } from 'src/auth/cookie-jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signup(
    @Body()
    signupDto: SignupDto,
  ) {
    return this.authService.register(signupDto);
  }
  @Post('/login')
  async login(
    @Body()
    logindata: LoginDto,
    @Res() res: Response,
  ) {
    const token = await this.authService.login(logindata);
    if (!token) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    if (token) {
      res.cookie('token', token, {
        httpOnly: true,
        secure: false, // set true in production with HTTPS
        sameSite: 'lax',
        maxAge: 30 * 60 * 1000,
      });
    }
    return res.json({ message: 'Login successful', token: token });
  }
  @UseGuards(CookieJwtAuthGuard)
  @Post('/logout')
  logout(@Res() res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
    });

    return res.json({ message: 'Logged out successfully' });
  }
  @UseGuards(CookieJwtAuthGuard)
  @Get('/profile')
  getProfile(@Req() req: any) {
    return { ...req.user };
  }
}
