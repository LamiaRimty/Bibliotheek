import express from "express"
import mysql from "mysql"

const app= express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"bibliotheek123",
    database:"testbook"
})

//if there is an auth problem 
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "bibliotheek123";


app.get("/",(req,res)=>{
    res.json("This is the bibliotheek's bookbackend")
})

//getting all books from db

app.get("/books",(req,res)=>{
  const q= "SELECT * FROM testbook.books";
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

//create a new book
//INSERT INTO table_name(column_1,column_2,column_3) VALUES (value_1,value_2,value_3);
app.post("/books",(req,res)=>{
    const q = "INSERT INTO books(`title`,`desc`,`cover`) VALUES (?)";
    const values=[
        "title from bookbackend",
        "desc from bookbackend",
        "cover from bookbackend",
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Wow,Book has been created!")
      })
})


app.listen(8800,()=>{
    console.log("Connected to bookbackend!")
})