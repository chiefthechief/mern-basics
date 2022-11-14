const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/users");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://chiefcujo:14343297332@cluster0.vkfypnl.mongodb.net/learning-mern?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
   .then((result) => console.log("connected to database"))
   .catch((err) => console.log(err));

app.get("/getUsers", (req, res) => {
   UserModel.find({}, (err, result) => {
      if(err){
         res.json(err);
      }else{
         res.json(result);
      }
   })
});
app.post("/createUser", async (req, res) => {
   const user = req.body;
   const newUser = new UserModel(user);
   await newUser.save();
   res.json(user);
})
app.listen(3001, () => {
   console.log("server is up and running...");
});