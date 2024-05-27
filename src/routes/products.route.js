import express from "express";

import { createProduct} from '../controllers/productsController.js'



const route = express.Router()

route
    .post("/", createProduct)
    .get("/")
    .get("byId/:id")
    .put("/edit/:id")
    .delete("/delete/:id")

export default route;