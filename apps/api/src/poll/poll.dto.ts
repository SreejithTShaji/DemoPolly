import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsDate,
  IsNumber,
  IsEmail,
  Max,
  IsEnum,
  IsInt,
} from 'class-validator';
import { Type } from 'class-transformer';

export class AuthorDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'JD' })
  @IsString()
  initials: string;
}

export class PollOptionDto {
  @ApiProperty({ example: '1' })
  @IsString()
  id: string;

  @ApiProperty({ example: 'React' })
  @IsString()
  label: string;

  @ApiProperty({ example: '⚛️', required: false })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiProperty({ example: 45, required: false })
  @IsOptional()
  percentage?: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  selected?: boolean;
}

export class PollDto {
  @ApiProperty({ example: 'poll-1' })
  @IsString()
  id: string;

  @ApiProperty({ example: '1' })
  @IsNumber()
  duration: number;

  @ApiProperty({ example: 'active' })
  @IsString()
  status: string;

  @ApiProperty({ example: 'What is your favorite frontend framework?' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Choose the framework you use most for web apps' })
  @IsString()
  question: string;

  @ApiProperty({ type: AuthorDto })
  @ValidateNested()
  @Type(() => AuthorDto)
  author: AuthorDto;

  @ApiProperty({ example: '2 days left' })
  @IsString()
  timeInfo: string;

  @ApiProperty({ type: [PollOptionDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PollOptionDto)
  options: PollOptionDto[];

  @ApiProperty({ example: ['256 votes', 'Expires: Dec 30, 2025'] })
  @IsArray()
  stats: string[];

  @ApiProperty({ example: 'React', required: false })
  @IsOptional()
  @IsString()
  winner?: string;
}

export class PollVoteDto {
  @ApiProperty({ example: 'user-123' })
  @IsString()
  userId: string;

  @ApiProperty({ example: 'poll-1' })
  @IsString()
  pollId: string;

  @ApiProperty({ example: '1' })
  @IsString()
  optionId: string;

  @ApiProperty({ example: '2025-07-26T12:30:00.000Z' })
  @IsDate()
  createdAt: Date;
}

export class DeletePollDto {
  @ApiProperty({ example: 'poll-1' })
  @IsString()
  pollId: string;
}

export class CreatePollDto {
  @ApiProperty({ example: '1' })
  @IsNumber()
  @IsInt()
  @Max(120)
  duration: number;

  @ApiProperty({
    example: ['john@example.com', 'ananthan1@example.com'],
    description: 'List of whitelisted emails',
    required: false,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsEmail({}, { each: true })
  @Type(() => String)
  whitelist?: string[];

  @ApiProperty({ example: 'public' })
  @IsString()
  @IsEnum(['public', 'private'])
  type: string;

  @ApiProperty({ example: 'What is your favorite frontend framework?' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Choose the framework you use most for web apps' })
  @IsString()
  question: string;

  @ApiProperty({ type: [PollOptionDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PollOptionDto)
  options: PollOptionDto[];
}
