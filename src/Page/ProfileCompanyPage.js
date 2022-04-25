import React, { Component, useState } from "react";
import "../Style/css/ProfilePage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import profilimg from "../Style/img/profilimg.png";
import StoreService from "../services/StoreService";
import { StoreComponent } from "../components/StoreComponent";
import { TabComponentCompany } from "../components/TabComponentCompany";
import { CompanyAllListProductComponent } from "../components/CompanyAllListProductComponent";
import { HeaderComponent } from "../components/HeaderComponent";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class ProfileCompanyPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <div className="container ProfilePage">
          <div className="row">
            <div className="col">
              <TabComponentCompany />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProfileCompanyPage;
