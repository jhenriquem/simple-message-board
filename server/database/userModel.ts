import { model, Schema } from "mongoose";

import UserI from "../types/userTypes";

const userSchema = new Schema<UserI>({
  username: { type: String, required: true },
  date: { type: String, required: true },
  message: { type: String, required: true }
})

export const userModel = model<UserI>("User", userSchema)

