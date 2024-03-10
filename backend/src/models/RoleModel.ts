// src/models/RoleModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IRole extends Document {
  name: string;
}

const RoleSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
});

export const RoleModel = mongoose.model<IRole>('Role', RoleSchema);

