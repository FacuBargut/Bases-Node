const express = require("express");

require("dotenv").config();

const cors = require("cors");
const {dbConnection} = require("./database/connection");

// Create express server
const app = express();

// Config CORS
app.use(cors());

// Read and parse body
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));

dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${process.env.PORT}`);
});
