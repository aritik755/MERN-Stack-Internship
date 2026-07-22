// import express from "express";
 
// const app = express();
// const PORT = 3000;
// // crud operation in-memory
// let users = [{
//     userId: 1,
//     name: "Avi"
// }];
 
// let nextId = 2;
 
// app.post("/users", (req,res)=>{
//     const user = {
//         userId: nextId++,
//         name: "Shipra"
//     }
//     users.push(user);
//     res.status(201).json({user});
// })
 
// app.get("/users", (req,res)=>{
//     res.status(200).json({users})
// })
 
// app.get("/users/:id", (req,res)=>{
//     const user = users.find(u=>u.userId==Number(req.params.id));
//     res.status(200).json({user});
// })
 
// app.patch("/users", (req,res)=>{
//     const user = users.find(u=>u.userId==3);
//     user.name = "kaveri";
//     res.status(200).json({user});
// })
 
// app.delete("/users/:id", (req,res)=>{
//     users = users.filter(u=>u.userId != req.params.id);
//     res.status(200).json({users});
// })
 
// app.listen(PORT, ()=>{
//     console.log(`Server is running at port ${PORT}`)
// })
 
// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";

// const app = express();
// app.use(express.json()); // It converts incomming json request to js object
// app.post("/students", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.status(200).json({message: "Creation Successfull", student: {id: 1, ...data}});
// })

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`)
// })