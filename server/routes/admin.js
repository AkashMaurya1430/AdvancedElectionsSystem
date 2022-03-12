const express = require("express");
const security = require("../middlewares/security");
const router = express.Router();
const adminController = require("../controllers/admin")

router.get('/',(req,res)=>{
    res.send("Hi")
})

router.post("/createSlot",security.isAuth,security.checkRole(["Admin"]),adminController.createSlot)

router.post("/approveCandidate",security.isAuth,security.checkRole(["Admin"]),adminController.approveCandidate)

router.post("/approveVoter",security.isAuth,security.checkRole(["Admin"]),adminController.approveVoter)


module.exports = router;