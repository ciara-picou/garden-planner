import React, { Component } from "react";
import { Form, Card, Button, Col } from "react-bootstrap";
class SignUp extends Component {
  state = {
    loggedIn: false,
    user: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.props.handleChange(e);
  };

  signUp = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())

      .then((userInfo) => {
        localStorage.setItem("token", userInfo.token);

        this.props.handleLogin();
      });

    e.target.reset();
  };

  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <form onSubmit={(e) => this.signUp(e)}>
          <label>UserName</label>
          <input
            onChange={(e) => this.handleChange(e)}
            name="username"
            type="text"
          ></input>
          <label>Password</label>
          <input
            onChange={(e) => this.handleChange(e)}
            name="password"
            type="password"
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default SignUp;
