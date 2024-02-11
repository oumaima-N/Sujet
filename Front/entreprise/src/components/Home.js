import { useState } from 'react';
import axios from "axios";
import {useNavigate , link} from "react-router-dom";

function Home(){

    const location=useLocation()


   return (
       <div className="homepage">
             // afficher le nom de utilisateur
            <h1>Hello {location.state.id} and welcome to the home</h1>

       </div>
   )


}