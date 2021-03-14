import React from 'react'
import {Navbar, Nav, Button, Container} from 'react-bootstrap';



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
  </Navbar.Collapse>
  {props.loggedIn ? <Button onClick={handleClick}variant="secondary">Logout</Button> : null}
</Navbar>
        </header>
    )
}

export default Header




