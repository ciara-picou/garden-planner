import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";


class PlantContainer extends Component {
  state = {
    allPlants: [],
    display: false,
  };

  componentDidMount = () => {
    fetch(`http://localhost:3001/users/${this.props.user.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())

      .then((user) => {
        console.log(user);
        this.setState({
          allPlants: user.plants,
        });
      });
  };

  createPlant = () => {
    console.log("A plant is born!");
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  newPlant = (e) => {
    e.preventDefault();
    console.log("Post Plant");

    let name = e.target[0].value;
    let image = e.target[1].value;
    let water = e.target[2].value;
    let light = e.target[3].value;
    let cold_tolerance = e.target[4].value;
    let fertilization = e.target[5].value;
    let next_fertilization_date = e.target[6].value;

    let user_id = this.props.user.id;

    fetch("http://localhost:3001/plants", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        pimage: image,
        water: water,
        light: light,
        fertilization: fertilization,
        next_fertilization_date: next_fertilization_date,
        cold_tolerance: cold_tolerance,
        user_id: user_id,
      }),
    })
      .then((res) => res.json())
      .then((newPlant) =>
        this.setState({
          allPlants: [...this.state.allPlants, newPlant],
        })
      );

    e.target.reset();
  };

  handleDelete = (plantId) => {
    let updatePlantList = this.state.allPlants.filter(
      (plant) => plant.id !== plantId
    );
    console.log(updatePlantList);
    fetch(`http://localhost:3001/plants/${plantId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    }).then((res) =>
      this.setState({
        allPlants: updatePlantList,
      })
    );
  };

  handleEdit = (e, updatedPlant) => {
    console.log(e);
    e.preventDefault();

    let allPlants = this.state.allPlants;
    let thisPlantIndex = allPlants.indexOf(updatedPlant);
    let newDate = e.target[0].value;
    let updatedDate = (allPlants[
      thisPlantIndex
    ].next_fertilization_date = newDate);
    console.log(updatedPlant);
    console.log(allPlants);
    console.log(thisPlantIndex);
    console.log(updatedDate);
    fetch(`http://localhost:3001/plants/${updatedPlant.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        next_fertilization_date: updatedDate,
      }),
    })
      .then((res) => res.json())

      .then(
        this.setState({
          allPlants: allPlants,
        })
      );
    e.target.reset();
  };

  render() {
    return (
      <div>
        <h2>My Garden:</h2>
        {this.state.allPlants.map((plant) => {
          return (
            <PlantCard
              key={plant.id}
              plant={plant}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          );
        })}
        <br></br>
        <br></br>
        <Button onClick={this.createPlant} variant="primary" size="lg">
          Add a Plant to My Garden
        </Button>{" "}
        <br></br>
        <br></br>
        {this.state.display ? <NewPlantForm newPlant={this.newPlant} /> : null}
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default PlantContainer;
