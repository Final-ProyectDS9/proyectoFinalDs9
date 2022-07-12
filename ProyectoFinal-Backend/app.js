require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios").default;
const mongoose = require("mongoose");
const { PORT = 3000 } = process.env;
app.use(cors());
const mongo_uri = "mongodb://localhost:27017/ifinityDB";

//** CONEXION CON MONGO */
// mongoose.set('useCreateIndex', true);
mongoose.connect(mongo_uri, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Conectado a:" + mongo_uri);
  }
});
//** ESQUEMA */
const UsuarioSchema = new mongoose.Schema(
  {
    usermail: { type: String,unique: true,required: true},
    birthday: { type: String},
    phone:    { type: String },
    username: { type: String, required: true},
    password: { type: String, required: true },
    type:     { type: Number, required: true, default: 2, min: 1, max: 3 }
  },
  {
    timestamps: true,
    versionKey:false
  }
); //1-Usuario Regular,2-Usuario vendedor
//** MODELO */
const User = mongoose.model("user", UsuarioSchema);
app.get("/:user/:pass/:name/:phone/:birthday/:option", async (req, res) => {
  const userData = {
    usermail:req.params.user,
    username: req.params.name,
    password: req.params.pass,
    phone: req.params.phone,
    birthday: req.params.birthday,
    type:req.params.option
  };
  try {
    console.log(req.params.name);
    User.create(userData, (err, docs) => {
      console.log(docs);
      if (err) {
        res.json({ Message: "Something bad :(", type: err, create: false });
      } else {
        res.json({ Message: "Created successfully :)", create: true });
      }
    });
  } catch (err) {
    console.log(err);
  }
});
//* LOGIN **/
app.get("/autenticate/:user/:pass", (req, res) => {
  const user = req.params.user;
  const password = req.params.pass;
  try {
      let userExist 
      User.findOne({ usermail: user, password: password }, (err, docs) => {
      if (docs != null || docs != undefined) {
        userExist = docs;
        res.json({ docs, login_status: true });
      } else {
        res.json({ docs, login_status: false });
      }
    });
    console.log(userExist);
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`);
});
