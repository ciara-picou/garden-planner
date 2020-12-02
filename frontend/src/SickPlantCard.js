


import React, { Component } from 'react';
import SickFront from './SickFront'
import SickBack from './SickBack'


class SickPlantCard extends Component {


  render() {
    return (
      
        <div>
           <SickFront post={this.props.post} key={this.props.post.id}/> 
        </div>
     
    )
  }
}
export default SickPlantCard