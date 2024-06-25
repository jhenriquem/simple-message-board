import express from "express"
import router from "../routes/messagesRoutes"
import connectionDB from "../database/config"
import errorHandler from "../middleware/errorHandler"

async function server() {
  const app = express()
  const PORT = process.env.PORT || 3000

  app.use(express.json())
  app.use(errorHandler)

  try {
    connectionDB()
    app.use(router)

    app.listen(PORT, () => {
      console.log(`Online Server the port => ${PORT}`)
    })
  }
  catch (err) {
    console.log(`Error : ${err}`)
  }
}

export default server
