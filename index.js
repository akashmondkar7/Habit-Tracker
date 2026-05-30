import express from 'express'
import dotenv from 'dotenv'





const app= express();

app.get('/',(req,resp)=>{
    resp.send("<h1> Home page</h1>")
})
app.listen(3500)