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
    return { username: "Username is required" };
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    // const username = this.username.current.value;
    console.log("Form submitted.");
  };

  handleChange = ({ currentTarget: input }) => {
    // using object destructuring and rename it to input
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
