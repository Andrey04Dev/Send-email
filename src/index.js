import 'dotenv/config'
import express from 'express'
import './email'
const app =  express()

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(3000,()=>{
    console.log('Server is opened on PORT:',3000)
})