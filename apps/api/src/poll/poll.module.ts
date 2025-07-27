import { Module } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { PollSchema } from './poll.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/user.schema';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: 'Poll', schema: PollSchema },{ name: 'User', schema: UserSchema }]),
    AuthModule,
  ],
  providers: [PollService],
  controllers: [PollController],
})
export class PollModule {}
