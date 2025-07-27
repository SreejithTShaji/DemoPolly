import { Schema, Document, mongo } from 'mongoose';

export interface PollOption {
  id: string;
  label: string;
  icon?: string;
}

export interface PollVote {
  userId: mongo.ObjectId;
  optionId: string;
  createdAt: Date;
}

export interface Poll extends Document {
  createdAt: Date;
  duration: number;
  status: 'active' | 'voted' | 'ended';
  type: 'public' | 'private';
  whitelist: mongo.ObjectId[];
  title: string;
  question: string;
  authorid: mongo.ObjectId;
  options: PollOption[];
  votes: PollVote[];
  winner?: string;
}

const PollOptionSchema = new Schema<PollOption>({
  id: { type: String, required: true },
  label: { type: String, required: true },
  icon: { type: String },
});

export const PollVoteSchema = new Schema<PollVote>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  optionId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const PollSchema = new Schema<Poll>({
  createdAt: { type: Date, default: Date.now },
  duration: { type: Number, required: true },
  status: { type: String, required: true, enum: ['active', 'voted', 'ended'] },
  type: { type: String, required: true, enum: ['public', 'private'] },
  whitelist: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  title: { type: String, required: true },
  question: { type: String, required: true },
  authorid: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  options: { type: [PollOptionSchema], required: true },
  votes: { type: [PollVoteSchema], default: [] },
  winner: { type: String },
});
