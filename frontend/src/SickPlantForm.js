import React, { Component } from "react";
import { Form, Card, Button, Col } from "react-bootstrap";

class SickPlantForm extends Component {
  render() {
    return (
      <Form onSubmit={(e) => this.props.createPost(e)}>
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Group controlId="post-sick-plant">
              <Form.Label class="text-white">
                Post Photos of Your Sick Plants Here
              </Form.Label>
              <Form.Control
                size="lg"
                type="photo"
                placeholder="Upload a photo"
              />
            </Form.Group>
            
            <Form.Group controlId="post-sick-plant">
              <Form.Control
                size="lg"
                type="content"
                placeholder="Ask the Community"
              />
              <Form.Text className="text-white">
                ie: Why is my plant wilting? I watered it just yesterday.
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

export default SickPlantForm;
