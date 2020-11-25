import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import SickBack from './SickBack'
    class SickFront extends Component {

    state={
        display: false
      }

      handleClick = () => {
        let newBoolean = !this.state.display
        console.log(this.props)
        this.setState({
          display: newBoolean
        })
       
      }

      render() {
        return (
    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.post.image} />
        <Card.Body>
            <Card.Title>{this.props.post.content}</Card.Title>
            <Button onClick={this.handleClick} variant="primary" size="lg">View Community Feedback</Button>{' '}
            {this.state.display? <SickBack comments={this.props.post.comments} post={this.props.post}/> : null}
        </Card.Body>
    </Card>
   
  )
}
    }


export default SickFront