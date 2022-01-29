// Routes
const common = require("./common")
const candidate = require("./candidate")
const voter = require("./voter")
const admin = require("./admin")


const initRoutes = (app) => {
  app.use("/", common ); 
  app.use("/candidate", candidate ); 
  app.use("/voter", voter ); 
  app.use("/admin", admin ); 
};

module.exports = initRoutes;