const express = require('express')
const router = express.Router()

const Item = require('../../models/Item') // The Item model

// GET all data from /api/items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => {
            res.json(items)
            res.send(JSON.stringify(items))
        })
})

//POST data to /api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
        // date: is automatically set to the current date in the schema
    }).then(item => {
        res.json(item)
        res.send(JSON.stringify(item))
    })
})

//DELETE data from api/items/:id
router.delete('/:id', (req, res) => {
    //Item.findByIdAndDelete
    Item.findById(req.params.id)
        .then(item => Item.remove(item).then(() => res.send('Item deleted!')) )
        .catch(err => res.send('Unable to delete item: ' + err))
})

module.exports = router