import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import PlantCard from './PlantCard'
import NewPlantForm from './NewPlantForm'


//  export class PlantContainer extends Component {
  class PlantContainer extends Component {

  state = {
    allPlants: [],
    display: false
  }

// may need to make it http://localhost:3001/plants
// because of google api specified domain

  componentDidMount = () => {
    fetch('http://localhost:3000/plants')
    .then(res => res.json())
    .then(plants => {
      this.setState({
        allPlants: plants
      })
    })

  }

 
  createPlant = () => {
    console.log("A plant is born!")
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  newPlant= (e) => {
    e.preventDefault()
    console.log("Post Plant")

      let name =e.target[0].value
      let image = e.target[1].value
      let water = e.target[2].value
      let light = e.target[3].value
      let cold_tolerance = e.target[4].value
      let fertilization = e.target[5].value
      let next_fertilization_date = e.target[6].value
      
                // "user_id": get from session? below is hardcoded
      let user_id = 12
      // do i need to worry about user_id? 
      //Yes when you have a login you can save logged in user to state
      fetch("http://localhost:3000/plants",{
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
               "name": name,
               "pimage": image,
               "water": water,
                "light": light,
                "fertilization": fertilization,
                "next_fertilization_date": next_fertilization_date,
                "cold_tolerance": cold_tolerance,
                // "user_id": get from state below is hardcoded
                "user_id": user_id
          })
      })
      .then(res => res.json())
      .then(newPlant => this.setState({
          allPlants: [...this.state.allPlants, newPlant]
      })
     
      )
    
      e.target.reset()
}


  handleDelete = (plantId) => {
    let updatePlantList = this.state.allPlants.filter(plant => plant.id !== plantId)
    console.log(updatePlantList)
    fetch(`http://localhost:3000/plants/${plantId}`, {
        method: "DELETE"
    })
    .then(res => this.setState({
        allPlant: updatePlantList
    }))
}

handleEdit = (e, updatedPlant) => {
    console.log(e)
    e.preventDefault()
    console.log ("we're editing")
   
    let allPlants = this.state.allPlants
    let thisPlantIndex= allPlants.indexOf(updatedPlant)
    let newDate = e.target[0].value
    let updatedDate= allPlants[thisPlantIndex].next_fertilization_date = newDate
    fetch(`http://localhost:3000/plants/${updatedPlant.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            next_fertilization_date: updatedDate
        })
    })
    .then(res => res.json())
    .then(this.setState({
        allPlants: allPlants
    })
    )
    // .then(editedPlant => console.log(editedPlant))
    e.target.reset()
}

  
  render() {
    return (
      <div>
          {this.state.allPlants.map(plant => {
            return <PlantCard key={plant.id} plant={plant} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />   
          })}
          <br></br>
          <br></br>
          <Button onClick={this.createPlant} variant="primary" size="lg">Add a Plant to My Garden</Button>{' '}
          {this.state.display ? <NewPlantForm newPlant={this.newPlant} /> : null}
          <br></br>
          <br></br>
          {/* {this.state.display ?  console.log("show") : null}
        <p>The display is{this.state.display}</p> */}
      </div>
    );
  }

}

export default PlantContainer