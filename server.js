const express = require('express')
const mongoose =require('mongoose')

const app = express()

mongoose.connect("mongodb://127.0.0.1:27017")

// const UserSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// })
// const UserModel = mongoose.model("users",UserSchema)

// app.get("/getUsr",(req,res)=> {
// //    UserModel.find({}).then(function(users) {
//         res.json(users)
//     }).catch(function(err) {
//         console.log(err)
//     })
// })
app.get('/bonjour',(req,res)=> {
    res.send('oumayma')
})

app.listen(3002, ()=>{
    console.log("Server is Running")
})



