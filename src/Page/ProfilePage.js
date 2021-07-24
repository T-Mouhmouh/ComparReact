import React, { Component, useState } from "react";
import "../Style/css/ProfilePage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import profilimg from "../Style/img/profilimg.png";
import StoreService from "../services/StoreService";
import { StoreComponent } from "../components/StoreComponent";
import { TabComponent } from "../components/TabComponent";
import { CompanyAllListProductComponent } from "../components/CompanyAllListProductComponent";
import { HeaderComponent } from "../components/HeaderComponent";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <div class="container ProfilePage">
          <div class="row">
            <div class="col-8">
              <TabComponent />
            </div>
            <div class="col-4">
              <img className="profilimg" src={profilimg} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProfilePage;
