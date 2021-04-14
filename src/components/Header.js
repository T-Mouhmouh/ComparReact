import React from "react"; 
import "../Style/css/header.css";
import 'bootstrap/dist/css/bootstrap.css';
export const Header = () => {
  return (
    <div class="bannerheader">
      <div class="container-fluid"> 
        <div class="container row vertical-center">
          
          <div class="col-sm-3 col-xs-3 text-center royaume">
            <img  class="img-responsive" /> logo
          </div>

          <div class="col-sm-6 col-xs-6 text-center sloagn">
           menu
          </div>

          <div class="col-sm-3 col-xs-3 text-center logo">
            <img  class="img-responsive" /> login
          </div>

        </div>
      </div>
    </div>
  );
};
