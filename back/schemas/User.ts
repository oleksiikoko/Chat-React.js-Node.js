import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: String,
    avatar: String,
    fullname: String,
    password: String,
    confirmed: Boolean,
    confirm_hash: String,
    last_seen: Date
  },
  {
    timestamps: true
  }
);

export default UserSchema;
