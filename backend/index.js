import express from "express"
import mysql from "mysql"

const app= express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"password",
    database:"testbook"
})

app.get("/",(req,res)=>{
    res.json("This is the bibliotheek's bookbackend")
})

app.listen(8800,()=>{
    console.log("Connected to bookbackend!")
})