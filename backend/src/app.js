import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import foodrouter from "./routes/foodRoute.routes.js"
import userrouter from "./routes/userRoute.route.js"
import cardrouter from "./routes/cartRoute.route.js"
import orderrouter from "./routes/orderRoute.route.js"

//routes declaration
app.use("/api/v1/food",foodrouter)
app.use("/api/v1/user",userrouter)
app.use("/api/v1/cart",cardrouter)
app.use("/api/v1/order",orderrouter)

// http://localhost:8000/api/v1/users/register


export { app }