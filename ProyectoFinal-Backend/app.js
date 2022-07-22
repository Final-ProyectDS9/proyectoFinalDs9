require("dotenv").config();
//const upload = require('/libs/storage')
const multer  = require('multer');
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios").default;
const mongoose = require("mongoose");
var body_parser = require('body-parser');
const { PORT = 3000 } = process.env;
app.use(cors());
app.use(express.json());

//**----------Ininit Upload----------------------------------------*//
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imgs')
  },
  filename: function (req, file, cb) {
    //console.log(file);
    cb(null, Date.now()+"--"+file.originalname)
  }
})
let upload = multer({storage});
//-------------------------------------------------------------------//
const mongo_uri = "mongodb://localhost:27017/ifinityDB";

//** --------------------CONEXION CON MONGO-----------------------*/
mongoose.connect(mongo_uri, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Conectado a:" + mongo_uri);
  }
});

//**--------------------------------ESQUEMA--------------------*/
//**--------------------------ESQUEMA UsuarioSchema-----------*/
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
//**--------------------ESQUEMA serviceSchema---------------*/
const serviceSchema =  new mongoose.Schema(
  {
    service_name:          {type: String, required: true},
    service_description:   {type:String ,required: true},
    author_name:          {type:String ,required: true},
    author_id:          {type:String ,required: true},
    price:                {type:String ,required: true},
    type:                 {type:String ,required: true},
    service_photo:         {type:String ,required: true}
  },
  {
    timestamps: true,
    versionKey:false
  }
);

const categorySchema = new mongoose.Schema(
  {
    category_name: {type:String }
  },
  {
    timestamps: true,
    versionKey:false
  }
  );

//**------------------ MODELO--------------------------- */

//** ----------MODELO PARA USUARIOS---------------------*/
const User = mongoose.model("user", UsuarioSchema);

//** ----------MODELO PARA SERVICIOS-------------------*/
const Service  = mongoose.model("services",serviceSchema);

//** ----------MODELO PARA CATEGORIAS-------------------*/
const Category  = mongoose.model("category",categorySchema);


//**---------------------- ENDPOINT ----------------- */
//*! ENDPOINT DE REGISTRO DE USUARIO (--INSERT DEBEN SER CON POST--)
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

//*! ENDPOINT DE LOGIN (--SEACH PUEDEN SER CON GET--)//
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

//*! ENDPOINT DE CREAR SERVICOS (--INSERT DEBEN SER CON POST--)//
app.post("/services",(req, res,next)=> {
  //console.log(req.file.filename);
  const serviceData = {
    service_name:           req.body.data,
    service_description:    req.body.service_description,
    author_name:            req.body.author_name,
    author_id:              req.body.author_id,
    price:                  req.body.price,
    type:                   req.body.categories,
    service_photo:          "foto.jpg"
  };
  
  try {
    Service.create(serviceData, (err, docs) => {
      //console.log(docs);
      if (err) {
        res.json({ Message: "Something bad :(", type: err, create: false });
      } else {
        res.json({ Message: "Created successfully :)", create: true,data:docs });
        //console.log(docs)
      }
    });
  } catch (err) {
    console.log(err);
  }
});

//*! ENDPOINT PARA LISTAR TODOS LOS SERVICOS//
app.get("/service/all", async (req, res) => {
  Service.find({}, 
    (err, docs) => {
    if (docs != null || docs != undefined) {
      res.json({data:docs});
    } else {
      res.json({error:err});
    }
  });
});

//*! ENDPOINT PARA LISTAR LOS SERVICOS DE UN USUARIO EN PARTICULAR//
app.get("/service/:author_id", async (req, res) => {
  Service.find({author_id: req.params.author_id}, 
    (err, docs) => {
    if (docs != null || docs != undefined) {
      res.json({data:docs});
    } else {
      res.json({error:err});
    }
  });
});

//*! ENDPOINT DE CREAR CATEGORIAS (--INSERT DEBEN SER CON POST--)//
app.post("/category",(req, res)=> { 
 const categoryData = {
    category_name:           req.body.category_name
  };
  try {
    Category.create(categoryData, (err, docs) => {
      //console.log(docs);
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

//*! ENDPOINT PARA LISTAR TODOS LOS SERVICOS//
app.get("/category/all", async (req, res) => {
  Category.find({}, 
    (err, docs) => {
    if (docs != null || docs != undefined) {
      res.json({data:docs});
    } else {
      res.json({error:err});
    }
  });
});


app.put("/img/:id",upload.single('inpFile'),(req, res,next)=> {
  const id = mongoose.Types.ObjectId(req.params.id);
  console.log(req.file);
  Service.updateOne(
    {_id: id},
    {service_photo:req.file.filename},
    (err,docs)=>{
      res.send({
        items:docs
      });
    });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`);
});
