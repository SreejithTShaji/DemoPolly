import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto, SignupDto } from './auth.dto';
import { User } from 'src/users/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService,private jwtService: JwtService) {}

  async register(userData: SignupDto): Promise<any> {
    if (!userData.name || !userData.email || !userData.password) {
      throw new Error(
        'All fields are required: name, email, password, and role.',
      );
    }
    if (userData.password !== userData.conformpassword) {
      throw new Error('Passwords do not match.');
    }
    if (userData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      throw new Error('Invalid email format.');
    }

    return this.usersService.create(userData);
  }
    async generateToken(data: { email: string; role: string }): Promise<string> {
    const payload = { ...data}; 
    return this.jwtService.sign(payload);
  }

  // Verify JWT
  async verifyToken(token: string) {
    return this.jwtService.verify(token);
  }


  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.usersService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    if (!user) {
      throw new Error('Invalid email or password.');
    }
    const token = await this.generateToken({ email: user.email, role: user.role });
    
    return token;
  }

  // logout
  async logout(): Promise<any> {
    // Implement logout logic here, e.g., invalidate session or token
    return { message: 'User logged out successfully' };
  }

  // getProfile
  async getProfile(): Promise<any> {
    // Implement logout logic here, e.g., invalidate session or token
    return { message: 'Profile data get successfully' };
  }
}
