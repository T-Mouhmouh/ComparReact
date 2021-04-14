import React, {useState} from "react"; 
import "../Style/css/Header.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../Style/img/car.jpg"
export const Header = () => {
 
  return (
    
        <div class="Navbar  ">
          <div className="leftSide">
           <div className="Links" >
            <a>Home</a>
          


          
            <a>Client</a>
            <a>Contact Us</a>
            </div>
            <button>open</button>
          </div>
       
          <div className="rightSide">
           
            <button></button>
          </div>
       
 

        </div>
   
       
  );
};
