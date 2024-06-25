import { Request, response, Response } from "express"
import { NewUser, getUsers } from "../services/Users"


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


export async function postMessage(req: Request, res: Response) {
  interface UserI {
    name: string,
    date: string,
    message: string
  }


  const user: UserI = req.body
  if (!user.name || !user.date || !user.message) {
    return res.status(400).json({ status: 400, type: "Error", message: "Invalid request data" });
  }
  try {
    await NewUser(user)
    const response = { status: 201, type: "Success", message: "successful adding user", whatUser: user }
    res.status(201).json(response)
    console.log("successful adding user", user)
  }
  catch (err) {
    const response = { status: 500, type: "Error", message: "Error adding user", erro: err }
    res.status(500).json(response)
    console.log("error adding user", user, err)
  }

}
