import React, { Component } from "react";
import Front from "./Front";
import Back from "./Back";

class PlantCard extends Component {
  state = {
    display: true,
  };
  handleClick = () => {
    console.log("I'm clicked!!");
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
    console.log(this.state.display);
  };
  render() {
    return (
      <div>
        <Front
          key={this.props.plant.id}
          plant={this.props.plant}
          handleDelete={this.props.handleDelete}
          handleEdit={this.props.handleEdit}
        />
      </div>
    );
  }
}
export default PlantCard;


