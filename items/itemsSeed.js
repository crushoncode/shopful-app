const Item = require('./Item.js')

const items = [
  {
    name: "Spinach",
    description: "Heathly, green, spinach"
  },
  {
    name: "Apple",
    description: "Fresh, red apples"
  },
  {
    name: "Watermelon",
    description: "Tasty watermelon"
  }
]

Item.create(items)
  .then(() => {
      console.info(`seeded items`)
  })