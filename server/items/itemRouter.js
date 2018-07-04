const express = require('express')
const router = express.Router()
const JWT = require('jsonwebtoken')
const { Bearer } = require('permit')
const Item = require('./Item')

router.get('/', (req, res) => {

    // console.log(req.cookies.access_token)
    // console.log(token)

    // const decoded = JWT.verify(token, JWT_SECRET)

    Item.find()
        .then(items => {
            res.status(200).json(items)
        }) 
        .catch(err => {
            throw new Error(err.message)
        })
})

module.exports = router