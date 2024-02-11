import './App.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate , link} from "react-router-dom";

function Signup() {
  const [mail, setMail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  async function submit(e){
    e.preventDefault();
    try
     {
       await axios.post("http:/localhost:3000/singnup",{
               mail,
               password,
               companyName,
               address,
               phone,
             
       })
        
      }
    catch(e){
          console.log(e);
        }

   };

  return (
    <div className="login">
      <h1>Page d'inscription pour les entreprises</h1>
      <form action="Post">
        <input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="text" placeholder="Nom de l'entreprise" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        <input type="text" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <input type="text" placeholder="Numéro de téléphone" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} required />
        <input type="submit" onClick={submit}/>
      </form>
      <br />
          <p>OR</p>
          <br />
           <link to="/">Login Page</link>
    </div>
  );
}

export default RegisterPage;
