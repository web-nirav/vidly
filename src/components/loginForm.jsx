import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  // username = React.createRef(); // use refs only when it is needed
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {
      username: "",
      password: ""
    }
  };

  componentDidMount = () => {
    // this.username.current.focus();
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") errors.username = "Username required.";
    if (account.password.trim() === "") errors.password = "Password required.";
    return Object.keys(errors).length > 0 ? errors : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // const username = this.username.current.value;
    console.log("Form submitted.");
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    // spread operator to redefine errors object and validate individual propery on change event of input
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    // using object destructuring and rename it to input
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
