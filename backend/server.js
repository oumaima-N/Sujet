const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/authRoutes');
const  cors = require("cors");
const entreprise = require('./Models/entreprise');
const app = express(); 
app.use(express.json());
//app.use('/api/auth', authRoutes);


app.get("/",cors(),(req,res)=>{

}
)

app.post("/",async(req,res)=>{
   const{mail,password}=req.body
   try{//check if is exist
         const check=await entreprise.findOne({mail:mail})
         if(check){
          res.json("exist")
         }
         else{
           res.json("notexist")
         }
   }
   catch{
        res.json("notexist")
   }
})

app.post("/signup",async(req,res)=>{
  const{mail,
    password,
    companyName,
    address,
    phone,}=req.body

   //creat new user 
    const data ={
      mail: mail,  
      password:password,
      companyName:companyName,
      address:address,
      phone:phone,
    }

  try{//check if is exist
        const check=await entreprise.findOne({mail:mail})
        if(check){
         res.json("exist")
        }
        else{
          res.json("notexist")
          await entreprise.insertMany([data])
        }
  }
  catch{
       res.json("notexist")
  }
})
mongoose.connect('mongodb://localhost:27017/plateforme', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connecté à MongoDB');
  app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
  });
})
.catch(error => {
  console.error('Erreur de connexion à MongoDB :', error);
});
