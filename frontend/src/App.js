import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Modal, Button } from "react-bootstrap";
import PlantContainer from "./PlantContainer";
import DiscussionBoard from "./DiscussionBoard";
import SickBack from "./SickBack";
import Calendar from "./Calendar";
import Login from "./Login";
import SignUp from "./SignUp";


class App extends React.Component {
  state = {
    username: "",
    password: "",
    loggedIn: false,
    user: {},
    error: {},
    display: false,
  };

  componentDidMount() {
    if (localStorage.token) {
      fetch("http://localhost:3001/user", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => res.json())
        .then((userInfo) => {
          this.setState({
            loggedIn: !this.state.loggedIn,
            user: userInfo,
          });
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = () => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        if (userInfo.error) {
          this.setState({
            error: userInfo.error,
          });
        } else {
          localStorage.setItem("token", userInfo.token);
          this.setState({
            loggedIn: !this.state.loggedIn,
            user: userInfo.user,
            error: {},
          });
        }
      });
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    console.log(this.props);
    this.setState({
      error: [1],
    });
  };

  handleLogout = () => {
    this.setState({
      user: {},
      loggedIn: false,
    });
    localStorage.clear();
  };

  render() {
    return (
      <>
        <Header
          handleLogout={this.handleLogout}
          loggedIn={this.state.loggedIn}
        />
        <main>
          <Container>
            <h1>Garden Planner</h1>
            {this.state.error.length > 1 ? (
              <Modal.Dialog>
                <Modal.Header closeButton>
                  <Modal.Title>Invalid Username or Password!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <p>
                    Please carefully re-enter your information and try again.
                  </p>
                </Modal.Body>

                <Modal.Footer>
                  <Button onClick={this.handleClick} variant="secondary">
                    Close
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            ) : null}
            {this.state.loggedIn ? (
              <div>
                <PlantContainer user={this.state.user} />
                <Calendar />
                <DiscussionBoard userId={this.state.user.id} />
              </div>
            ) : (
              <div>
                <SignUp
                  handleLogin={this.handleLogin}
                  handleChange={this.handleChange}
                />
                <Login
                  handleLogin={this.handleLogin}
                  handleChange={this.handleChange}
                />
              </div>
            )}
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
