const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hey TG Back-End. It is working!')
})

app.listen(6060, () => {
    console.log('Server is running on port 6060')
})