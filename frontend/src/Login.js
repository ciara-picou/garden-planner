
import React, { Component } from "react";
import {Form, Card, Button, Col} from 'react-bootstrap';
import PlantContainer from './PlantContainer'
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
//i dont think im using this
    // seePlants=()=>{
    //     fetch('http://localhost:3001/plants', {
    //         method: "GET",
    //         headers: {
    //           Authorization: `Bearer ${localStorage.token}`
    //         },
    //       })
    //       .then(res => res.json())
    //     //    .then(console.log)
    //      .then(plants => {
    //         this.setState({
    //           allPlants: plants
    //         })
    //       })

        
        

    // }

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
        
        {/* {this.state.loggedIn ? 
           <div>
           <PlantContainer allPlants={this.state.allPlants}/>
           </div>
          : null} */}
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