import express from 'express'
const app = express()
import authRoute from './routes/auth.route.js'

app.use('/api/auth' , authRoute) 

const port = 3001


const start = async () => {
    app.listen(port , console.log(`Server is listening on ${port}`))
}

start()  