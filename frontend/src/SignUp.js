import React, {Component} from 'react';
import {Form, Card, Button, Col} from 'react-bootstrap';
class SignUp extends Component {

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,

            })
        })
        .then(res => res.json())
        .then(console.log)
    }

render() {
    return (
      <div>
        <h2>SignUp</h2>
        <form
          onSubmit={(e) => this.signUp(e)}>
          <label>UserName</label>
          <input onChange={(e)=> this.handleChange(e)} name="username" type="text"></input>
          <label>Password</label>
          <input onChange={(e)=> this.handleChange(e)} name="password" type="password"></input>
          <input type="submit"></input>
        </form>
        {/* <Form onSubmit={null}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>UserName</Form.Label>
    <Form.Control onChange={null} name="username" type="text" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={null} name="password" type="text"  />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
      </div>
    );
  }
}

export default SignUp;