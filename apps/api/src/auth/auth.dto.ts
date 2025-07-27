import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, Matches } from 'class-validator';

export class SignupDto {
  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'Valid email address',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'StrongPass@123',
    description: 'Password (min 6 chars)',
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'StrongPass@123',
    description: 'Confirm password (must match password)',
  })
  @IsString()
  conformpassword: string;
}

export class LoginDto {

    @ApiProperty({ example: 'john@example.com', description: 'email of the user' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'StrongPass@123', description: 'Password of the user' })
    @IsString()
    password: string;
}
//export class
export class ProfileDto {

    role: string;
    name: string;
}
