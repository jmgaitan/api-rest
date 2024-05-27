import express from "express"

import { dbConection } from "./src/database/dbConection.js"
import productosRouter from "./src/routes/products.route.js"
import dotenv from "dotenv"

const appServer = async () => {
    dotenv.config()
    await dbConection()
    const server = express()
    server.use(express.json())


    //endpoint

    server.use("/api/product", productosRouter)
    
    server.listen(process.env.PORT, () => console.log("El servidor esta corriendo correctamente en el puerto ", process.env.PORT))
}

appServer()