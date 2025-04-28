import 'dotenv/config';
import express from 'express'
const app = express()
import authRoute from './routes/auth.route.js'
import { connectDB } from './lib/db.js'

app.use(express.json())

app.use('/api/auth' , authRoute) 

const port = 3001


const start = async () => {
    connectDB()
    app.listen(port , console.log(`Server is listening on ${port}`))
}

start()  