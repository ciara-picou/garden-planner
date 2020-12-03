import React, { Component } from 'react';
import SickPlantForm from './SickPlantForm.js';
import SickPlantCard from './SickPlantCard.js';
import { Button } from 'react-bootstrap';



  class DiscussionBoard extends Component {

  state={
      isClicked: false,
      posts:[]
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/posts', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      },
    })
    .then(res => res.json())
    .then(posts => {
      this.setState({
        posts: posts
      })
    })
    

  }
  
 

  handleClick = () => {
      this.setState({
          isClicked: !this.state.isClicked
      })
  }

  createPost= (e) => {
      e.preventDefault()
      console.log("I've been clicked")
        let content = e.target[1].value
        let image = e.target[0].value
        let user_id = this.props.userId

        fetch("http://localhost:3001/posts",{
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                content,
                image,
                user_id

            })
        })
        .then(res => res.json())
        .then(newPost => this.setState({
            // posts: [...this.state.posts, newPost]
             posts: [newPost, ...this.state.posts]
        }))
        e.target.reset()
  }
  
  render() {
    return (
      <div>
          <h1>Sick Plant Gallery </h1>
          <h4>Is your plant looking a little worse for the wear? <br></br>
            The Garden Planner community can help you identify  <br></br>
            the problem and get your plant on the road to recovery.<br></br>
          </h4>
          <br></br>
          <Button onClick={this.handleClick} variant="primary" size="lg">Post Your Sick Plant Here</Button>{' '}
          <br></br>
          <br></br>
         {this.state.isClicked ? <SickPlantForm createPost={this.createPost}/> : null}
         {this.state.posts.map(post => {
            return <SickPlantCard post={post} key={post.id}/>
          })}
          <br></br>
      </div>
    );
  }

}

export default DiscussionBoard