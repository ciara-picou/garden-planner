import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
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
          console.log(userInfo);
          this.setState({
            loggedIn: !this.state.loggedIn,
            user: userInfo,
          });
        });
    }
  }

  handleChange = (e) => {
    //console.log(e.target.value)
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
            error: {}
          });
        }
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
              <h2>Something went wrong. Please try again.</h2>
            ) : null}
            {this.state.loggedIn ? (
              <div>
                <PlantContainer user={this.state.user} />
                <Calendar />
                <DiscussionBoard userId={this.state.user.id} />
              </div>
            ) : (
              <div>
                <SignUp handleLogin={this.handleLogin} handleChange={this.handleChange}/>
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
