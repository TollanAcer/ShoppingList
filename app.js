import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Babel')
})

app.listen(3500, () => console.log('Server running on 3500...'))