const express = require('express')
const connectToDatabase = require('./database')

const app = express()
const port = 5000

connectToDatabase()

app.use('/user', require('./routers/userRouter'))

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

// Additional server setup and middleware can go here
