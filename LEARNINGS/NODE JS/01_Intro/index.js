import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

const PORT = process.env.PORT;

app.get("/", (req,res)=> {
  res.send("Hello from server.");
})

app.listen(PORT, (req, res) => {
  console.log(`Server running at port ${PORT}.`)
})