import express from "express"
import mysql from "mysql"
import cors from "cors"
import multer from 'multer';

const app= express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"bibliotheek123",
    database:"testbook"
})

//if there is an auth problem 
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "bibliotheek123";



// Multer configuration for handling image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Create a folder named 'uploads' to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set the filename to be unique
  },
});
const upload = multer({ storage: storage });




app.use(express.json())  //Express SERVER MIDDLEWARE 
app.use(cors())//active axios localhost to Books.jsx
app.use('/uploads', express.static('uploads'));


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
    const q = "INSERT INTO books (`title`,`author`,`desc`,`price`,`cover`) VALUES (?)";
    const values=[

        req.body.title,
        req.body.author,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Wow,Book has been created!")
      })
})


app.delete("/books/:id",(req,res)=>{
  const bookId = req.params.id;
  const q= "DELETE FROM books WHERE id = ?"

  db.query(q,[bookId],(err,data)=>{
    if(err) return res.json(err)
    return res.json("Book has been Succesfully deleted!")
  })
})

app.put("/books/:id",(req,res)=>{
  const bookId = req.params.id;
  const q= "UPDATE  books SET `title`= ?,`author`= ?,`desc`= ?,`price`= ?,`cover`= ?  WHERE id = ?";
  const values=[

    req.body.title,
    req.body.author,
    req.body.desc,
    req.body.price,
    req.body.cover,
];


  db.query(q,[...values,bookId],(err,data)=>{
    if(err) return res.json(err)
    return res.json("Book has been Succesfully updated!")
  })
})





app.listen(8800,()=>{
    console.log("Connected to bookbackend!")
})