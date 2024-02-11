import './App.css';
import { useState } from 'react';
import axios from "axios";
import {useNavigate , link} from "react-router-dom";

function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
  
    async function submit(e){
      e.preventDefault();
      try
       {
         await axios.post("http:/localhost:3000/",{
            mail,password
         })
          
        }
      catch(e){
            console.log(e);
          }
    }
  
     return (
      
      <div className="login">
        <h1>Login</h1>
          <form action="Post">
            <input type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} required />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="submit" onClick={submit}/>
          </form>

          <br />
          <p>OR</p>
          <br />
           <link to="/signup">Signup Page</link>

       </div>
     )
  }
  
  export default Login;
  
