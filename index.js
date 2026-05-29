import express from 'express'
import mongoose from 'mongoose';

const app = express();


app.get('/',(req,resp)=>{
    resp.send("home")
})

app.listen(3500)