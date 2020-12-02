// import React from 'react';
import React, { Component } from "react";
import Back from "./Back";
import { Card, Button, Row, Col } from "react-bootstrap";
//  const Front = (props) => {
class Front extends Component {
  state = {
    display: false,
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
        <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              onClick={this.handleClick}
              variant="top"
              src={this.props.plant.pimage}
            />
            <Card.Body>
              <Card.Title>{this.props.plant.name}</Card.Title>
              <Button
                onClick={() => this.props.handleDelete(this.props.plant.id)}
                variant="outline-secondary"
                size="sm"
              >
                x
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
        {this.state.display ? (
         
          <Back
            key={this.props.plant.id}
            plant={this.props.plant}
            handleEdit={this.props.handleEdit}
          />
         
        ) : null}
         </Col>
         </Row>
      </div>
    );
  }
}

// "id": 1,
// "name": "Geranium",
// "pimage": ""
// "water": "sparingly",
// "light": "full sun",
// "fertilization": "every 2 weeks",
// "next_fertilization_date": "12/03/2020",
// "cold_tolerance": "45 degrees",
//"user_id": 6,

export default Front;
