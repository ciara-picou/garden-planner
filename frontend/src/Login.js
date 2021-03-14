
import React, { Component } from "react";
import PlantCard from './PlantCard'
class Login extends Component {

    state={
        allPlants:[],
        isClicked: false,
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

   

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleLogin()
        e.target.reset()
    }


  render() {
    return (
      <div>
        <h2>Login</h2>
        <form
          onSubmit={(e) => this.handleSubmit(e)}>
          <label>UserName</label>
          <input onChange={(e)=> this.props.handleChange(e)} name="username" type="text"></input>
          <label>Password</label>
          <input onChange={(e)=> this.props.handleChange(e)} name="password" type="password"></input>
          <input type="submit"></input>
        </form>
        
        
          {this.state.isClicked ? localStorage.clear() : null}
          <br></br>
          <br></br>
          
          {this.state.allPlants.map(plant => {
            return <PlantCard key={plant.id} plant={plant} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />   
          })}
      </div>

    );
  }
}

export default Login;