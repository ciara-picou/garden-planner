// import React from 'react';
import React, { Component } from "react";
import ApiCalendar from "react-google-calendar-api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Button, Form, Col } from "react-bootstrap";


class Calendar extends Component {

  state={
    eventSummary: "",
    eventDate: ""

  }

  setEventSummary=(e)=>{
    this.setState({
      eventSummary: e.target.value
    })
  }
  setEventDate=(e)=>{
    this.setState({
      eventDate: e.target.value
    })
  }

  handleClick = () => {
    ApiCalendar.handleAuthClick();
  };

  createEvent = (e) => {
    var gapi = window.gapi;
    let theEvent = {
       'summary': this.state.eventSummary,

      start: {
         'date': this.state.eventDate
      },
      end: {
         'date': this.state.eventDate
      },
    };
    let calendarId = "primary";
    //ApiCalendar.createEvent(event: object, calendarId: string = this.calendar)
    ApiCalendar.createEvent(theEvent, calendarId);

    var request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: theEvent,
    });

    request.execute((event) => {
      window.open(event.htmlLink);
    });

  };

  render() {
    return (
      <>
        <Container>
          <h1>Add plant care reminders to</h1>
          <h1>your Google Calendar!</h1>
          <br></br>
          <br></br>
          <h4>First:</h4>
          <Button style={{ width: 100, height: 50 }} onClick={this.handleClick}>
            Sign in
          </Button>
          <br></br>
          <br></br>
          <h4>Then:</h4>
          <Form>
            <Form.Row>
              <Col xs="auto">
                <Form.Control
                  onChange={(e)=>this.setEventSummary(e)}
                  placeholder="Plant Care Event Name"
                />
              </Col>
              <Col xs="auto">
                <Form.Control
                  onChange={(e)=>this.setEventDate(e)}
                  type="date"
                  placeholder="yyyy/mm/dd"
                />
              </Col>
            </Form.Row>
          </Form>
          <Button style={{ width: 100, height: 50 }} onClick={this.createEvent}>
            Add an Event
          </Button>
          <br></br>
          <br></br>
        </Container>
      </>
    );
  }
}


export default Calendar;
