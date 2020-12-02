import React from 'react';
import {Card, ListGroup, Button, Form} from 'react-bootstrap';
 const Back = (props) => {
  return(
    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={null} />
        <Card.Body>
            <Card.Title>{props.plant.name} Care</Card.Title>
            <Card.Text>
                
                
                <ListGroup>
                    <ListGroup.Item>Water: {props.plant.water}</ListGroup.Item>
                    <ListGroup.Item>Light Requirements: {props.plant.light}</ListGroup.Item>
                    <ListGroup.Item>Cold Tolerance: {props.plant.cold_tolerance}</ListGroup.Item>
                    <ListGroup.Item>Fertilization Schedule: {props.plant.fertilization}</ListGroup.Item>
                   <ListGroup.Item> Next Fertilization Date: {props.plant.next_fertilization_date}</ListGroup.Item>
                </ListGroup>
                <Form onSubmit={(e)=>props.handleEdit(e, props.plant)}>
                        <Form.Group controlId="edit-date">
                        <Form.Control size="sm" type="date" placeholder="mm/dd/yyyy" />
                        </Form.Group>
                     <Button variant="outline-secondary" type="submit" size="sm">Update</Button>{' '}
                </Form>
                
            </Card.Text>
        </Card.Body>
    </Card>
   
  )
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

export default Back