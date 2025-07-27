import { Injectable } from '@nestjs/common';
import { CreatePollDto, PollDto } from './poll.dto';
import { PollVoteDto } from './poll.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/user.schema';
import { Poll } from './poll.schema';
@Injectable()
export class PollService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    @InjectModel('Poll') private pollModel: Model<Poll>,
  ) {}
  async getPolls(): Promise<any> {
    return 'List of polls';
  }
  async createPoll(pollDto: CreatePollDto, user: any): Promise<any> {
    const authorid = await this.userModel
      .findOne({ email: user.email })
      .select('_id')
      .exec();

    let newPollData = {
      createdAt: new Date(),
      duration: pollDto.duration || 120,
      status: 'active',
      type: pollDto.type || 'public',
      title: pollDto.title,
      question: pollDto.question,
      authorid,
      options: pollDto.options.map((option: any) => ({
        id: option.id,
        label: option.label,
        icon: option.icon || null,
      })),
      votes: [],
    };

    if (pollDto.whitelist && Array.isArray(pollDto.whitelist)) {
      const whitelist = await this.userModel
        .find({ email: { $in: pollDto.whitelist } })
        .select('_id')
        .exec();
      const poll = new this.pollModel({
        ...newPollData,
        whitelist: whitelist.map((user) => user._id),
      });
      poll.save();
      return { message: 'Poll Posted successfully', poll };
    } else {
      const poll = new this.pollModel({ ...newPollData });
      poll.save();
      return { message: 'Poll Posted successfully', poll };
    }
  }
  async updatePoll(
    id: string,
    pollDto: CreatePollDto,
    user: any,
  ): Promise<any> {
    // c      
    return '';
  }
  async deletePoll(pollId: string): Promise<any> {
    return { message: 'Poll Deleted successfully', pollId };
  }

  async votePoll(pollVoteDto: PollVoteDto): Promise<any> {
    return { message: 'Poll Posted successfully', poll: pollVoteDto };
  }
}

//   async create(userData: SignupDto): Promise<User> {
//     const password = await this.hashPassword(userData.password);
//     const newUser = {
//       name: userData.name,
//       email: userData.email,
//       password,
//       role: 'user',
//       submitedPolls: [],
//     };
//     const user = new this.userModel(newUser);
//     return user.save();
//   }
