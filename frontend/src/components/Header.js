import React from 'react'
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


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
  {props.loggedIn ? <Button onClick={handleClick}variant="secondary">Logout</Button> : null}
</Navbar>

    {/* <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={()=> <Home/> }/>
        <Route  path="/plants" render={(routerProps) => <PlantCard plant={plant}/>}/>
        <Route  path="/discussion-board" component={DiscussionBoard}/>
        <Route  path="/calendar" component={Calendar}/>
        <Route  component={NoMatch}/>
   </Switch>
  </Router> */}
        </header>
    )
}

export default Header




