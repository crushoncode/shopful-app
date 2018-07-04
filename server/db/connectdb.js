const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://serina:ilovecake@cluster0-5y6b6.mongodb.net/shopful')
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

