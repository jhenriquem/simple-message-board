import { Error } from "mongoose";
import { userModel } from "../database/userModel";
import UserI from "../types/userTypes";

export async function getUsers() {
  try {
    const usuarios = await userModel.find({}, { username: 1, message: 1, date: 1, _id: 1 })
    return usuarios
  }
  catch (err) {
    return new Error(`Error fetching users : ${err}`)
  }
}
export async function NewUser(userData: UserI) {
  const newUser = new userModel(userData)

  try {
    await newUser.save()
    return "Success";
  }
  catch (err) {
    return new Error(`Error saving new user : ${err}`);
  }
}
