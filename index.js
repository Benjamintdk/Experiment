const express = require('express')
const app = express()
const port = 3000

app.get('/stats', (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log("hello world")
})
