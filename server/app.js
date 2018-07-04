const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

const itemRouter = require('./items/itemRouter');
const authRouter = require('./auth/authRouter');

const PORT = 8082

// middleware 
app.use(cors({
    origin: 'http://localhost:8082',
    credentials: true
}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.use(cookieParser())
app.use('/items', itemRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.info(`server listening on port ${PORT}`)
})

