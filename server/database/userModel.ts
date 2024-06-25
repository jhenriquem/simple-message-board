import { model, Schema } from "mongoose";

interface User {
  name: string,
  date: string,
  message: string
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  date: { type: String, required: true },
  message: { type: String, required: true }
})

export const userModel = model<User>("User", userSchema)

