const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
  res.send("<h1>Hello! Welcome to my Assignment!</h1>");
});
app.post('/signup', (req, res) => {
  const {  email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Enter all the required fields!" });
  }
  if (email.trim() === "") {
    return res.status(400).json({ error: "Email cannot be empty" });
  }
  if (password.length < 8 || password.length > 16) {
    return res.status(400).json({ error: "Password cannot be empty" });
  }
  const userDetails = { email, password };
  res.json({ message: "User created successfully!", userDetails });
});
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});