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

// const PlantCard = (props) => {
//   return(

//     <div className="card">
//         <h2>{props.plant.name}</h2>
//         <img src={props.plant.pimage} alt={props.plant.name} className="plant-image" />
//         <button onClick={null}className="plant-care-btn">Plant Care</button>
//     </div>

//   )
// }

// "id": 1,
// "name": "Geranium",
// "pimage": ""
// "water": "sparingly",
// "light": "full sun",
// "fertilization": "every 2 weeks",
// "next_fertilization_date": "12/03/2020",
// "cold_tolerance": "45 degrees",
//"user_id": 6,
