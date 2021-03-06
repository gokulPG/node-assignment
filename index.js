const express = require('express')
const cors = require('cors')

const app = express()
const port = 3005

const {mongoose} = require('./config/database')
const employeeRouter = require('./app/controllers/employeeController')

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.send('welcome to Employee webiste')
})

app.use('/employees', employeeRouter)

app.listen(port,()=>{
    console.log('listening to port',port)
})