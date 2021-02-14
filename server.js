const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()
app.use(bodyParser.json())
app.use('/api/items', items) // the routes/api/items should refer to the ./routes/api/items file 

mongoose.connect('mongodb://localhost:27017/shoppinglist')
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Failed to connect to MongoDB: ' + err))

app.get('/', (req, res) => {
    res.send('Express')
})

const port = process.env.port || 5000
app.listen(port, () => {
    console.log('Server running on port 5000...')
})