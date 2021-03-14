import React, { Component } from "react";
import { Form, Col, Button, Card, ListGroup } from "react-bootstrap";

class SickBack extends Component {
  state = {
    comments: this.props.comments,
  };
  renderComments = () => {
    if (this.props.comments) {
      this.props.comments.map((comment) => {
        return <h5>comment.content</h5>;
      });
    }
  };
  postComment = (e, postId) => {
    e.preventDefault();
    console.log(e.target);
    let content = e.target[0].value;
    // I decided not to incorporate the username for now, so I set a default value
    // to appease my strong params.
    let username = "username";

    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        content,
        username,
        post_id: postId,
      }),
    })
      .then((res) => res.json())
      .then((newComment) => {
        if (this.state.comments) {
          this.setState({
            comments: [...this.state.comments, newComment],
          });
        } else {
          this.setState({
            comments: [newComment],
          });
        }
      });

    e.target.reset();
  };

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Comments:</Card.Title>

          {this.state.comments
            ? this.state.comments.map((comment) => {
                return (
                  <ListGroup>
                    <ListGroup.Item>{comment.content}</ListGroup.Item>
                  </ListGroup>
                );
              })
            : null}
            <br></br>
        
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
