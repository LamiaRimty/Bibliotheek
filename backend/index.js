import express from "express"

const app= express()

const db = mysql.createconnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"testbook"
})

app.listen(8800,()=>{
    console.log("Connected to bookbackend!")
})