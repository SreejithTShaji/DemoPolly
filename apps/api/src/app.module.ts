import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PollModule } from './poll/poll.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PollModule,
    MongooseModule.forRoot(
      'mongodb+srv://sreejith:v0ST9dy0zFY705TA@cluster0.9mtgsdr.mongodb.net/DemoPolly?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
