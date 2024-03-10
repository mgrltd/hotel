
// src/models/user.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IRole } from './RoleModel';

export interface IUser extends Document {
  userName: string;
  phoneNumber:string;
  email: string;
  roles: IRole['_id'][]; // Reference to roles
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }], // Reference to roles
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
