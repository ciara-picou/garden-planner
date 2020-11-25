import React, { Component } from "react";
import {Form, Card, Button, Col} from 'react-bootstrap';
import PlantContainer from './PlantContainer'
import PlantCard from './PlantCard'
class Login extends Component {

    state={
        allPlants:[],
        isClicked: false
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password

            })
        })
       .then(res => res.json())
    //    .then(console.log)
       .then(userInfo =>{
           localStorage.setItem("token", userInfo.token)
        //    this.seePlants()
        //    localStorage.token =  userInfo.token would work just like line 29
       })
    }

    seePlants=()=>{
        fetch('http://localhost:3001/plants', {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.token}`
            },
          })
          .then(res => res.json())
        //    .then(console.log)
         .then(plants => {
            this.setState({
              allPlants: plants
            })
          })

        
        

    }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form
          onSubmit={(e) => this.handleSubmit(e)}>
          <label>UserName</label>
          <input onChange={(e)=> this.handleChange(e)} name="username" type="text"></input>
          <label>Password</label>
          <input onChange={(e)=> this.handleChange(e)} name="password" type="text"></input>
          <input type="submit"></input>
        </form>
        <Button onClick={this.handleClick}variant="primary">Logout</Button>{' '}
        {/* {localStorage.token ? 
           <div>
           <PlantContainer allPlants={this.state.allPlants}/>
           </div>
          : null}
          {this.state.isClicked ? localStorage.clear() : null} */}
          <br></br>
          <br></br>
          <Button onClick={this.seePlants}variant="primary">My Garden</Button>{' '}
          {this.state.allPlants.map(plant => {
            return <PlantCard key={plant.id} plant={plant} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />   
          })}
      </div>

    );
  }
}

export default Login;
