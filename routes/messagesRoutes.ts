import { Router } from "express";
import { getMessages, postMessage } from "../controllers/messageController";
const router = Router()


router.get("/messages", getMessages)

router.post("/new_message", postMessage)

export default router
