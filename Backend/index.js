const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const notesRoutes = require("./routes/notesRoutes");
const dbConnection = require("./config/dbConnection");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/notes", notesRoutes);

app.listen(PORT, () => {
  dbConnection();
  console.log(`Your Server Is Runing On ${PORT}`);
});
