import 'dotenv/config';
import express from 'express'
const app = express()
import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))

app.use('/api/auth' , authRoute) 
app.use('/api/message' , messageRoute) 

const port = 3001


const start = async () => {
    connectDB()
    app.listen(port , console.log(`Server is listening on ${port}`))
}

start()  