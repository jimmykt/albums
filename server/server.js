const express = require("express");
const app = express();

const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rootcap8",
  database: "AlbumsDB",
});

app.get("/", (req, res) => {
  res.send("welcome to albums");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
