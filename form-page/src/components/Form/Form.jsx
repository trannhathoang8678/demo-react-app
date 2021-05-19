import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z0-9]+/)) {
        formIsValid = false;
        errors["name"] = "Only letters and numbers";
      }
      let pattern = new RegExp("^.{8,}$");
      if (!pattern.test(fields["name"])) {
        formIsValid = false;
        errors["name"] = "Need 6 or more characters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }
    //password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^[a-zA-Z0-9]+/)) {
        formIsValid = false;
        errors["password"] = "Only letters and numbers";
      }
      let pattern = new RegExp("^.{8,}$");
      if (!pattern.test(fields["password"])) {
        formIsValid = false;
        errors["password"] = "Need 8 or more characters";
      }
    }
    if(fields["rePassword"] !== fields["password"]) {
      formIsValid = false;
      errors["rePassword"] = "The password re-enter is different"
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  registerSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Register success");
    } else {
      alert("Form has errors");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <form
          className="register-form"
          onSubmit={this.registerSubmit.bind(this)}
        >
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleChange.bind(this, "name")}
            value={this.state.fields["name"]}
          />
          <span className="error">{this.state.errors["name"]}</span>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={this.handleChange.bind(this, "email")}
            value={this.state.fields["email"]}
          />
          <span className="error">{this.state.errors["email"]}</span>
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={this.handleChange.bind(this, "password")}
            value={this.state.fields["password"]}
          />
          <span className="error">{this.state.errors["password"]}</span>
          <br />
          <input
            type="password"
            placeholder="Re-enter password"
            onChange={this.handleChange.bind(this, "rePassword")}
            value={this.state.fields["rePassword"]}
          />
          <span className="error">{this.state.errors["rePassword"]}</span>
          <br />
          <button className="register-button" id="submit" value="Submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
