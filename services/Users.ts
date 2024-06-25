import { Error } from "mongoose";
import { userModel } from "../database/userModel";

interface UserI {
  name: string,
  date: string,
  message: string
}

export async function getUsers() {
  try {
    const usuarios = await userModel.find({}, { name: 1, message: 1, date: 1 })
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
