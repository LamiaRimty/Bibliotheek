//index.js
import express from "express"
import mysql from "mysql"
import cors from "cors"
import multer from 'multer';
import bcrypt from 'bcrypt';
// Import the login router
// import loginRouter from './routes/login.js';



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


// Integrate the login router under the '/api' route 
// Integrate the login router under the '/api' route 
// app.use('/api/login', loginRouter);
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
    console.log("Blog Data:", data);
    return res.json(data)
  })
})

app.get("/book/:id",(req,res)=>{
  const bookId = req.params.id;
  const q = "SELECT * FROM testbook.books WHERE id = ? "

  db.query(q,[bookId],(err,data)=>{
  
    if (err) throw err;
      res.json(data[0]);
    });
  })

//create a new book
//INSERT INTO table_name(column_1,column_2,column_3) VALUES (value_1,value_2,value_3);
app.post("/books", upload.single('cover'),(req,res)=>{
    const q = "INSERT INTO books (`cover`,`title`,`author`,`price`,`desc`) VALUES (? , ? , ? , ? , ?)";
    const values=[
        req.file.filename,
        req.body.title,
        req.body.author,
        req.body.price,
        req.body.desc  
    ];

    db.query(q,values,(err,data)=>{
        if(err) return res.json(err);
        console.log("Image Path:", req.file.filename);
        return res.json("Wow,Book has been created!")
      })
})


app.delete("/book/:id",(req,res)=>{
  const bookId = req.params.id;
  const q= "DELETE FROM books WHERE id = ?"

  db.query(q,[bookId],(err,data)=>{
    if(err) return res.json(err)
    return res.json("Book has been Succesfully deleted!")
  })
})

app.put("/book/:id",(req,res)=>{
  console.log("Received update request:", req.body);
  const bookId = req.params.id;
  const q= "UPDATE  books SET `cover`= ? , `title`= ? ,`author`= ?, `price`= ? ,`desc`= ?  WHERE `id` = ?";
  const values=[
    req.body.cover,
    req.body.title,
    req.body.author,
    req.body.price,
    req.body.desc,
    bookId
    
];


  db.query(q,[...values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("Book has been Succesfully updated!")
  })
})


app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password before storing it in the database
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Insert new user into database
  db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    // User registered successfully
    return res.status(201).json({ message: 'User registered successfully' });
  });
});




app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Fetch user from database by email
  db.query('SELECT username, email, password FROM users WHERE email = ?', [email], async (error, results) => {

    
    
    if (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (!results.length) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    console.log("Received password:", password); // Assuming 'password' is the variable holding the client's password
    // Compare password
// Assuming the rest of your /login route remains unchanged
const user = results[0];
const isPasswordMatch = await bcrypt.compare(password, user.password); // Now 'user.password' is available for comparison
if (!isPasswordMatch) {
  return res.status(401).json({ message: 'Invalid email or password' });
}
// Continue with login success response if the password matches
// After verifying the user's password...
    // User authenticated successfully
    return res.status(200).json({
      message: 'Logged in successfully',
      userData: {
        username: results[0].username,
        email: results[0].email,
        // Add any other user details you wish to include
      },
       
      });
  });
});



// Add a new route for searching books by name
app.get("/search", (req, res) => {
  const searchQuery = req.query.q; // Get the search query from request query parameters
  const q = "SELECT * FROM books WHERE title LIKE ? OR author LIKE ?"; // SQL query to search for books by title or author
  const searchValue = `%${searchQuery}%`; // Add wildcard '%' to perform a partial match search

  db.query(q, [searchValue, searchValue], (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Book not found because Internal server error!" });
    }
    return res.json(data);
  });
});


app.listen(8800,()=>{
    console.log("Connected to bookbackend!")
})