import React from 'react'
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import DiscussionBoard from '../DiscussionBoard'


const Header = (props) => {

  const handleClick=()=>{
    props.handleLogout()
  }
    return(
        <header>
            
            <Navbar bg="primary"className="navbar" expand="lg">
  <Navbar.Brand className=".text-white" href="#home">Garden Planner</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    {/* <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
  {/* <Button href="/sick-plant-gallery" variant="secondary">Sick Plant Gallery</Button> */}
  {props.loggedIn ? <Button onClick={handleClick}variant="secondary">Logout</Button> : null}
</Navbar>

    
        </header>
    )
}

export default Header




