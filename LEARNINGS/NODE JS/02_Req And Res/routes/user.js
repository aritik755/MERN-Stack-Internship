import express from "express"

const router = express.Router();

router.get("/user", (req, res) => {
  console.log("User List Fetched")
  res.send("User list Fetched")
})

export default router