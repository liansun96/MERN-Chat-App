const express = require('express')
const app = express()

const port = 3001

const start = async () => {
    app.listen(port , console.log(`Server is listening on ${port}`))
}

start()