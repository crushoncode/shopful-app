const mongoose = require('mongoose')

// const url = 'mongodb+srv://serina:0GyiQY4Aj09Ymcob@cluster0-5y6b6.mongodb.net/test?retryWrites=true'
// mongodb+srv://serina:0GyiQY4Aj09Ymcob@cluster0-5y6b6.mongodb.net/test?retryWrites=true

// 0GyiQY4Aj09Ymcob

// const options = {
//     user: 'serina',
//     pass: process.env.MONGODB_USER_PASSWORD,
//     dbName: 'shopful',
//     promiseLibrary: global.Promise
// }

mongoose.connect('mongodb+srv://serina:ilovecake@cluster0-5y6b6.mongodb.net/test')
    .then(() => {
        console.info(
            'mongodb db connection established'
        )
    })
    .catch(err => {
        console.error(
            `mongodb db failure: ${err.message}`
        )
    })

module.exports = mongoose

