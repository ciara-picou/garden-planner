import React, { Component } from 'react';
import SickPlantForm from './SickPlantForm.js';
import SickPlantCard from './SickPlantCard.js';
import { Card, Button, Col} from 'react-bootstrap';


//  export class PlantContainer extends Component {
  class DiscussionBoard extends Component {

  state={
      isClicked: false,
      posts:[]
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/posts')
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
        let user_id = 12
        //will eventually pass prop of state of user_id
        // do i need to worry about user_id?
        fetch("http://localhost:3000/posts",{
            method: "POST",
            headers: {
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
            posts: [...this.state.posts, newPost]
        }))
        //  .then(newPost => console.log(newPost))
  }
  
  render() {
    return (
      <div>
          <h1>Sick Plant Gallery </h1>
          <h4>Is your plant looking a little worse for the wear? <br></br>
            The Garden Planner community can help you identify  <br></br>
            the problem and get your plant on the road to recovery.<br></br>
            
           
          </h4>
          <Button onClick={this.handleClick} variant="primary" size="lg">Post Your Sick Plant Here</Button>{' '}
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