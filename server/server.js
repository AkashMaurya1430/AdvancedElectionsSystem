const express = require("express");
const app = express();
const initDB = require("./config/initDb");
const initMiddlewares = require("./middlewares/index");
const initRoutes = require("./routes/index");

// Initializing DB
initDB();

// Initializing 
initMiddlewares(app);

// Initializing 
initRoutes(app);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

