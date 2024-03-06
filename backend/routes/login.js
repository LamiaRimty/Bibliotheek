// login.js

import express from 'express';
import bcrypt from 'bcrypt';
import db from '/index.js';// Assuming you have a database connection module

const loginRouter = express.Router();

loginRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Fetch user from database by email
  db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (!results.length) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const user = results[0];
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // User authenticated successfully
    return res.status(200).json({ message: 'Logged in successfully' });
  });
});

export default loginRouter;
