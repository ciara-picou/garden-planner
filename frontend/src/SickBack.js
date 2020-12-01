import React, { Component } from "react";
import { Form, Col, Button, Card, ListGroup } from "react-bootstrap";

class SickBack extends Component {
  state = {
    // comments: [],
    comments: this.props.comments
  };
  renderComments = () => {
    if (this.props.comments) {
      
        // {console.log(this.props.comments)}
       
        this.props.comments.map((comment) => {
         return( <h5>
            comment.content 
            </h5>) 
        })
      
    }
  };
  postComment = (e, postId) => {
    e.preventDefault();
    console.log(e.target)
    let content = e.target[0].value;
    //let username = e.target[1].value;
    let username = "username";
    
    console.log(content)
    console.log(username)
    console.log(postId)
    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        content,
        username,
        post_id: postId
      }),
    })
      .then((res) => res.json())
    .then(newComment => this.setState({
        comments: [...this.state.comments, newComment]
    }))
    // .then(newComment => console.log(newComment))
    // console.log(this.state.comments)
    e.target.reset()
  };

  render() {
    return (
       <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Comments:</Card.Title> 
          {/* {this.props.comments ? (
      this.props.comments.map((comment) => {
       return( <h5>
          {comment.content}-{comment.username}
          </h5>) 
      
      })) : null */}
      {this.state.comments ? (
      this.state.comments.map((comment) => {
      //  return( <h5>
      //     {comment.content}
      //     </h5>) 
        return( <ListGroup>
          <ListGroup.Item>{comment.content}</ListGroup.Item>
        </ListGroup>
          
          )
      
      })) : null
    
    }
          
          <Form onSubmit={(e) => this.postComment(e, this.props.post.id)}>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Group controlId="post-comment">
                  <Form.Control
                    size="lg"
                    type="photo"
                    placeholder="Leave a Comment"
                  />
                </Form.Group>
                {/* <Form.Group controlId="post-comment">
                  <Form.Control
                    size="lg"
                    type="content"
                    placeholder="Enter Your Username"
                  />
                </Form.Group>  */}
                <Button variant="primary" type="submit" size="lg">
                  Post
                </Button>{" "}
              </Col>
            </Form.Row>
          </Form>
          </Card.Body>
       </Card>
     
    );
  }
}

export default SickBack;
