import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupDto } from 'src/auth/auth.dto';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async create(userData: SignupDto): Promise<User> {
    const password = await this.hashPassword(userData.password);
    const newUser = {
      name: userData.name,
      email: userData.email,
      password,
      role: 'user',
      submitedPolls: [],
    };
    const user = new this.userModel(newUser);
    return user.save();
  }

  async validateUser(email: string, password: string){
    const user = await this.userModel.findOne({ email }).exec();
    if (user && (await this.validatePassword(password, user.password))) {
      return user;
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
