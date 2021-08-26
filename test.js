
console.log('hello node.  How are we today?')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 res.send('hello node!!  This is a new app.')})
 
app.listen(port, () => {
  console.log(`Node Express is listening on port 3000`)
})