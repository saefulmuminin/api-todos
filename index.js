const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
const todoRoutes = require("./src/routes/todo.js");
app.use("/todos", todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
