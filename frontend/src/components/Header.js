import React from 'react'
import {Navbar, Nav, Button, Jumbotron, Container} from 'react-bootstrap';



const Header = (props) => {

  const handleClick=()=>{
    props.handleLogout()
  }
    return(
        <header>
            {/* <Navbar bg="light" expand="lg"> */}
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
{/* <Jumbotron fluid>
  <Container>
    <h1 className="text-white">Garden Planner</h1>
  </Container>
</Jumbotron> */}
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

// import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import  Home  from './Home';
// import { MyMovies } from './MyMovies';
// import  Movie  from './Movie';
// import { MoviesContainer } from './MoviesContainer';
// import { NoMatch } from './NoMatch';
// import {Layout}  from './components/Layout';
// import NavBar from './components/NavBar';
// import Tron from './components/JumboTron';
// import Login from './Login';
// import Signup from './Signup';


// class App extends Component {

//   render(){
//     return (
//       <React.Fragment>
//         <NavBar/>
//         {/* <Tron/> */}
        
//           <Router>
//             <Switch>
//               <Route path="/login" component={Login} />
//               <Route path="/signup" component={Signup} />
//               <Route exact path="/" component={()=> <Home/> }/>
//               <Route  path="/movies" component={MoviesContainer}/>
//               <Route  path="/my-movies" component={MyMovies}/>
//               <Route  component={NoMatch}/>
//             </Switch>
//           </Router>
        
//       </React.Fragment>
//     );
//   }
// }

// export default App;
