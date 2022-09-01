require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const { Pool } = require("pg");

app.use(cors());
app.use(helmet());
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("welcome to albums");
});

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
