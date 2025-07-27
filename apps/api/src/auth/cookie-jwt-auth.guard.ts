import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class CookieJwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    const req: Request = context.switchToHttp().getRequest();
    const token = req.cookies?.token;

    if (!token) throw new UnauthorizedException('No token found in cookies');

    try {
      const payload = this.jwtService.verify(token, {
        secret: 'MY_SECRET_KEY',
      });

      // Attach user payload to request
      req.user = payload;

      // Check role (if decorator @Roles used)
      if (requiredRoles && !requiredRoles.includes(payload.role)) {
        throw new ForbiddenException('Access denied: insufficient role');
      }

      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
