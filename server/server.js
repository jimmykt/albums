const express = require("express");
const app = express();

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
