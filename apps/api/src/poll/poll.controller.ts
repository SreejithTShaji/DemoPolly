import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PollDto, DeletePollDto, PollVoteDto, CreatePollDto } from './poll.dto';
import { PollService } from './poll.service';
import { CookieJwtAuthGuard } from 'src/auth/cookie-jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('polls')
export class PollController {
  constructor(private readonly pollService: PollService) {}
  @UseGuards(CookieJwtAuthGuard)
  @Get()
  getPolls() {
    return this.pollService.getPolls();
  }
  @UseGuards(CookieJwtAuthGuard)
  @Roles('admin')
  @Post()
  postPolls(@Body() createPollDto: CreatePollDto, @Req() req: any) {
    return this.pollService.createPoll(createPollDto,req.user);
  }
  @UseGuards(CookieJwtAuthGuard)
  @Roles('admin')
  @Put(':id')
  putPolls(@Param('id') id: string, @Body() pollDto: CreatePollDto, @Req() req: any) {
    return this.pollService.updatePoll(id, pollDto,req.user);
  }
  @UseGuards(CookieJwtAuthGuard)
  @Roles('admin')
  @Delete()
  deletePolls(@Body() deletePollDto: DeletePollDto) {
    return this.pollService.deletePoll(deletePollDto.pollId);
  }
  @UseGuards(CookieJwtAuthGuard)
  @Post('/vote')
  votePoll(@Body() votePollDto: PollVoteDto) {
    return this.pollService.votePoll(votePollDto);
  }
}
