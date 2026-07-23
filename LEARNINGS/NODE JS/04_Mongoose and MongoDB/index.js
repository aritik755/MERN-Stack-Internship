import express, { json } from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://aritik755_db_user:rWo2jGOthsuAiD9j@cluster0.aersal4.mongodb.net/mongoose?appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error:", err))

app.post("/users", async(req,res)=>{
  const data = req.body;
  await User.create(data);
  res.json({ data });
})

// get all users:
app.get("/users", async(req,res) => {
  const users = await User.find();
  res.status(200).json({users});
})

// get a user:
app.get("/users.:id", async(req,res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if(!user) return res.status(404).json({message: "User not found"})
  return res.status(200).json({users});
})

// update a user:
app.patch("/users/:id", async(req,res) => {
  const id = req.params.id;
  const data = req.body;
  const user = await User.findByIdAndUpdate(id, data);
  return res.status(200).json({user, message: "Success"});
});

// delete a user
app.delete("/users/:id", async(req,res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  return res.status(200).json({user, message: "Data Deleted"}) 
})

app.listen(5000, () => {
  console.log("Server is running at port 5000.")
})