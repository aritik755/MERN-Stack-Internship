// import dotenv from "dotenv";
// dotenv.config();
// import express from "express";

// const app = express();

// const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//   const data = req.query.name;
//   res.send(data);
// })

// app.get("/:x", (req, res) => {
//   let data =  res.params.x;
//   res.json({data});
// })

// app.use("/get", (req,res)=> {
//   res.json({status: "success"});
// })

// app.use("/", (req,res)=> {
//   res.send("Hello from server.");
// })

// app.listen(PORT, (req, res) => {
//   console.log(`Server running at port ${PORT}.`)
// })

// import fs from "fs";

// console.log("1: reading file...");

// // fs.readFile('data.txt', 'utf8', (err, data) => {
// //   if(err) throw err;
// //   console.log("3: file contents:", data);
// // });

// const data = fs.readFileSync("data.txt", "utf-8");
// console.log("3: i will wait", data)

// console.log("2: this runs before the file is dont reading.")

// const fs = require('fs');

// fs.readFile(__filename, () => {
//   setTimeout(() => console.log("timeout"), 0);
//   setImmediate(() => console.log("immediate"));
// });

// console.log("start");

// setTimeout(() => 
// console.log("timeout"), 0);

// process.nextTick(() => 
// console.log("nextTick"));

// Promise.resolve().then(() =>
// console.log("promise"));

// console.log("end");

// start
// end
// promise microtask
// nextTick macrotask
// timeout macrotas


// File Module

// import fs from "fs";

// 1.
// fs.readFile("data.txt", "utf-8", (err,data)=> {
//   if(err) console.log(err);
//   console.log(data);
// });

// 2.
// fs.writeFile("data.txt", "My name is Ritik Agarwal", (err) => {
//   if(err){
//     console.log(err);
//     return;
//   } 

//   console.log("File Written Successfully!");
// });

// 3.
// fs.appendFile("data.txt", "I am a B.Tech Student", () =>{
//   console.log("File Appended Successfully!");
// });

// 4.
// fs.unlink("data.txt", () => {
//   console.log("File Deleted Successfully.")
// });



// Path Module

// import path from "path";

// const data = path.join("components", "main", ".env");

// const resolvedData = path.resolve("components")

// console.log(resolvedData);


// OS Module

