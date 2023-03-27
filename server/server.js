const express = require("express");
const app = express();
const initDB = require("./config/initDb");
const initMiddlewares = require("./middlewares/index");
const initRoutes = require("./routes/index");

// Initializing DB  s
initDB();

// Initializing Middlewares
initMiddlewares(app);

// Initializing Routes
initRoutes(app);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

