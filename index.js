// this is the entry file for the application.
// this file is responsible for starting the express server
const connectMongo = require('./db');
connectMongo();
const express = require('express')
const app = express()
const port = 3000

//we have to tell express to use json. This is a middleware that will parse the json data from the request body.
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))



app.listen(port, () => {
  console.log(`Inotes app listening on http://localhost:${port}`)
  
})