require("dotenv").config();
//const upload = require('/libs/storage')
const multer  = require('multer');
const express = require("express");
const cors = require("cors");
const requests = require('request');
const app = express();
const axios = require("axios").default;
const mongoose = require("mongoose");
var body_parser = require('body-parser');
const { request } = require("express");
const { PORT = 3000 } = process.env;
let price='';
app.use(cors());
app.use(express.json());


//** Creacion de app con PAYPAL */
const CLIENT = 'AVDAI3u8nVPng4MYU0HP0l4IxzhahBZvXmrm4GsM387BCZRgQqczDkmy1iDBU44KdNeeuXxNy_IEpSV7';
const SECRET = 'EHheTm3FuC2R_4ZDwWH7nEKDK96ikN-6EQd60yz-Z7KmsnsSgWEQtnd1r4o7aNz_cLheCf3c4amZihCr';
const PAYPAL_API ='https://api-m.sandbox.paypal.com';

const auth= {user:CLIENT,pass:SECRET};

//* Creacion de controladores que vamos a usar */

const createPayment = async (req, res) => {
  console.log(price);
  const value_product = Number(price)
  const body = {
      intent: 'CAPTURE',
      purchase_units: [{
          amount: {
              currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
              value:value_product
          }
      }],
      application_context: {
          brand_name: `Sigma.com`,
          landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
          user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
          return_url: `http://localhost:3000/execute-payment`, // Url despues de realizar el pago
          cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
      }
  }
  //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
 
  requests.post(`${PAYPAL_API}/v2/checkout/orders`, {
      auth,
      body,
      json: true
  }, (err, response) => {
      res.json({ data: response.body })
  })
} 

//* Capturar el dinero  */
const executePayment = (req, res) => {
  const token = req.query.token; //<-----------

  requests.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
      auth,
      body: {},
      json: true
  }, (err, response) => {
      if(err){
        console.log(err);
      }
      else{

        res.redirect('http://127.0.0.1:5500/ProyectoFinal-Frontend/interfaces/servicios-shop.html')
        const vaucherData = {
          buyer_name: 'Octavio Hernandez',
          seller_name: 'Jostin Gamboa',
          price: '12.50',
          service_name:'Jardineria',
          date_shop: Date.now(),
          id_service: '12345',
          id_buyer:'123'
        };
        try {
          console.log(req.params.name);
          Voucher.create(vaucherData, (err, docs) => {
            console.log(docs);
            if (err) {
              console.log({ Message: "Something bad :(", type: err, create: false });
            } else {
              console.log({ Message: "Created successfully :)", create: true });
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
      //consoleres.json({ data: response.body })
  })
}

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
//**--------------------ESQUEMA categySchema---------------*/
const categorySchema = new mongoose.Schema(
  {
    category_name: {type:String }
  },
  {
    timestamps: true,
    versionKey:false
  }
  );
//**--------------------ESQUEMA reciveSchema---------------*/
const voucherSchema = new mongoose.Schema(
  {
    buyer_name: {type:String},
    seller_name: {type:String},
    price: {type:String},
    service_name:{type: String},
    date_shop: {type: String },
    id_service:{type: String},
    id_buyer:{type: String}
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

//** ----------MODELO PARA RECIBO-------------------*/
const Voucher  = mongoose.model("vouchers",voucherSchema);


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

app.post('/create-payment',createPayment);

app.get('/execute-payment',executePayment);

//*! ENDPOINT PARA CRECAR COMPRA (--INSERT DEBEN SER CON POST--)//
app.get('/create-payment/:product_price',(req, res)=> { 

    if(req.params.product_price){
      price=req.params.product_price;
      res.json({status: 'success'})
    }
    else{
      res.json({status: 'BAD :('})
    } 
 });

 app.get('/vouchers/:id_user',(req, res)=>{
  Voucher.find({id_buyer: req.params.id_user}, 
    (err, docs) => {
    if (docs != null || docs != undefined) {
      res.json({data:docs});
    } else {
      res.json({error:err});
    }
  });
 })

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`);
});
