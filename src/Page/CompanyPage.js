import React, { Component, useState } from "react";
import "../Style/css/CompanyPage.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import StoreService from "../services/StoreService";
import { StoreComponent } from "../components/StoreComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { CompanyAllListProductComponent } from "../components/CompanyAllListProductComponent";

import { Form, Button, Input, Label, FormGroup } from "reactstrap";

export class CompanyPage extends Component {
  constructor(props) {
    super(props);

    this.state = { Id_Company: 0, description: "" };
  }

  componentWillReceiveProps() {
    this.setState({ Id_Company: this.props.match.params.id });
  }
  componentWillMount = async () => {
    var company = await StoreService.GetStoreInfos(this.props.match.params.id);

    this.setState({
      Id_Company: this.props.match.params.id,
      description: company.data.description,
    });
  };
  render() {
    let { Id_Company, description } = this.state;

    return (
      <>
        <HeaderComponent />
        <div class="container">
          <div class="row">
            <div class="col-8">
              <div className="CompanyPage">
                {Id_Company != 0 && (
                  <CompanyAllListProductComponent idCompany={Id_Company} />
                )}
              </div>
            </div>
            <div class="col-4">
              {Id_Company != 0 && (
                <StoreComponent idCompany={Id_Company} IsCompanyPage={"yes"} />
              )}
              <div className="description">{description}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CompanyPage;
