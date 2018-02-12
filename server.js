const express = require('express')
const blogRouter = require('./routes/blogRouter')
const app = express()
const portNum = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api', blogRouter)

app.get('/', (request, response) => response.send('Server Listening...'))

app.listen(portNum, () => console.log(`Listening port: ${ portNum }`))
