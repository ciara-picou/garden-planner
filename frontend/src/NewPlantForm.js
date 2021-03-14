import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class NewPlantForm extends Component {
  render() {
    return (
      <Form onSubmit={(e) => this.props.newPlant(e)}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Group controlId="new-plant-form">
              <Form.Control size="lg" placeholder="New Plant Species" />
            </Form.Group>
            <Form.Group controlId="new-plant-form">
              <Form.Control
                size="lg"
                type="photo"
                placeholder="Upload a photo"
              />
            </Form.Group>

            <Form.Group controlId="new-plant-form">
              <Form.Control size="lg" placeholder="Water Requirements" />
            </Form.Group>
            <Form.Group controlId="new-plant-form">
              <Form.Control size="lg" placeholder="Light Requirements" />
            </Form.Group>
            <Form.Group controlId="new-plant-form">
              <Form.Control size="lg" placeholder="Cold Tolerance" />
            </Form.Group>
            <Form.Group controlId="new-plant-form">
              <Form.Control
                size="lg"
                placeholder="Fertilization Requirements"
              />
            </Form.Group>
            <Form.Group controlId="new-plant-form">
              <Form.Control
                size="lg"
                type="date"
                placeholder="Next Fertilization Date"
              />
              <Form.Text className="text-white">
                Next Fertilization Date
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default NewPlantForm;
//plant columns
// plant schema:
// t.string "name"
// t.string "pimage"
// t.string "water"
// t.string "light"
// t.string "fertilization"
// t.string "next_fertilization_date"
// t.string "cold_tolerance"
// t.integer "user_id"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false
