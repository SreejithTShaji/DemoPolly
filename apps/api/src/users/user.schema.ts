import { Schema, Document } from 'mongoose';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  submitedPolls?: Schema.Types.ObjectId[];
}

export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin', 'user'] },
  submitedPolls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }],
});
