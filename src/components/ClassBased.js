import React from "react";
import { Component } from "react";

class ClassBasedComponent extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.onNameAdded(e);
  };

  render() {
    return (
      <div className="container w-50 mt-5">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your Name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ClassBasedComponent;
