const express = require("express");
const security = require("../middlewares/security");
const router = express.Router();
const adminController = require("../controllers/admin")

router.get('/',(req,res)=>{
    res.send("Hi")
})

// For User Verification

router.get("/getAllVoters",security.isAuth,security.checkRole(["Admin"]),adminController.getAllVoters)

router.get("/getAllCandidates",security.isAuth,security.checkRole(["Admin"]),adminController.getAllCandidates)


router.post("/createSlot",security.isAuth,security.checkRole(["Admin"]),adminController.createSlot)

router.post("/approveCandidate",security.isAuth,security.checkRole(["Admin"]),adminController.approveCandidate)

router.post("/approveVoter",security.isAuth,security.checkRole(["Admin"]),adminController.approveVoter)

router.post("/getVoterData",security.isAuth,security.checkRole(["Admin"]),adminController.getVoterData)

// For Voting
router.get("/getCandidates",security.isAuth,security.checkRole(["Admin"]),adminController.getCandidates)

router.post("/castVote",security.isAuth,security.checkRole(["Admin"]),adminController.voteCandidate)





module.exports = router;