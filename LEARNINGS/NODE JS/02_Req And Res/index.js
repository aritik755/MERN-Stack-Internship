// import express from "express";
// import userRoutes from "./routes/user.js";

// const app = express();

// app.use(express.json());

// const logger = (req, res, next) => {
//   console.log("Data logger.");
//   next();
// };

// const auth = (req, res, next) => {
//   console.log("User Authenticated");
//   next(); // Missing next()
// };

// const validation = (req, res, next) => {
//   console.log("User Validation Successful.");
//   next();
// };

// // app.use("/", logger);
// // app.use("/", auth);
// // app.use("/", validation);

// // Route
// app.use("/", logger, auth, validation, (req, res) => {
//   res.status(200).json({
//     status: "success",
//     message: "Data sent successfully."
//   });
// });

// app.listen(3000, () => {
//   console.log("Server is running at port 3000");
// });

// import express from "express";

// const app = express();

// const userAdd = (req, res, next) =>{
//   req.user = {
//     id: 1,
//     role: "student"
//   }
//   next();
// }

// const isStudent = (req, res, next) => {
//   if(req.user.role === "student") next();
//     return res.json({message: "Unauthorized"})
// }

// const isAdmin = (req, res, next) => {
//   if(req.user.role === "admin") next();
//   return res.json({message: "Unauthorized Person"})
// }

// app.use("/student", userAdd, isStudent, (req, res) => {
//   res.json({status: "Success", message: "Student Portal accessed."})
// })

// app.use("/admin", userAdd, isAdmin, (req, res) => {
//   res.json({status: "Success", message: "Admin Portal Accesssible"})
// })

// app.listen(3000, () => {
//   console.log("Server is running at port 3000.");
// })

import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({message: "Welcome to Express"});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});