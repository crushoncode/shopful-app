const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()

const itemRouter = require('./items/itemRouter');

const PORT = 8082
app.use(bodyParser.json())

app.use(cors({
    origin: 'http://localhost:8082',
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Hello World')
})


app.use(cookieParser())
app.use('/items', itemRouter)

app.listen(PORT, () => {
    console.info(`server listening on port ${PORT}`)
})

