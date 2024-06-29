import { Request, Response } from "express"
import { NewUser, getUsers } from "../services/Users"
import UserI from "../types/userTypes"
import { userModel } from "../database/userModel";

export async function getMessages(req: Request, res: Response) {
  try {
    const users = await getUsers()
    const response =
      { status: 200, type: "Success", data: users }

    res.status(200).json(response)
  } catch (err) {
    const response = { status: 500, type: "Error", message: "error returning to messages", error: err }
    res.status(500).json(response)
    console.log(`Erro : ${err}`)
  }
}

export default async function getMessage(props: UserI) {

  try {
    const usuario = await userModel.find({ username: props.username, message: props.message, date: props.date }, { username: 1, message: 1, date: 1, _id: 1 })
    return usuario
  }
  catch (err) {
    return new Error(`Error fetching user : ${err}`)
  }
}
export async function postMessage(req: Request, res: Response) {

  const user: UserI = req.body
  if (!user.username || !user.date || !user.message) {
    return res.status(400).json({ status: 400, type: "Error", message: "Invalid request data" });
  }
  try {
    await NewUser(user)
    const response = { status: 201, type: "Success", message: "successful adding user", whatUser: await getMessage(user) }
    res.status(201).json(response)
    console.log("successful adding user", await getMessage(user))
  }
  catch (err) {
    const response = { status: 500, type: "Error", message: "Error adding user", erro: err }
    res.status(500).json(response)
    console.log("error adding user", user, err)
  }

}
