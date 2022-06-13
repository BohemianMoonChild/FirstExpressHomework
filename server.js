//===IMPORT EXPRESS===
const express = require('express')

//===IMPORT ROUTER===
const app = express()
const PORT = 1000

//===MIDDLEWARE===
app.use(express.json())



//===SET TO LISTEN TO ROUTER===
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`) //use back ticks
})
