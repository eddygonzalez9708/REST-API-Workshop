let express = require('express')
let router = express.Router()

// QueryString = query property on the request object
// e.g. localhost:3000/person?name=thomas&age=20
router.get('/person', (req, res) => {
  const { name, age } = req.query
  if (name) return res.send(`You have requested ${name} and he is ${age} years old.`)
 
  res.send('You have requested a person with no name and age.')
})

// Params property on the request object
// Example GET Request - localhost:3000/person/thomas
router.get('/person/:name&:age', (req, res) => {
  const { name, age } = req.params
  if (name) return res.send(`You have requested ${name} and he is ${age} years old.`)
  
  res.send('You have requested a person with no name and age.')
})

router.get('/error', (req, res) => {
  throw new Error('This is a forced error!')
})

module.exports = router