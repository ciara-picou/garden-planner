import React, { Component } from "react";
import ApiCalendar from "react-google-calendar-api";
import { Container, Button, Form, Col } from "react-bootstrap";

class Calendar extends Component {
  state = {
    eventSummary: "",
    eventDate: "",
  };
  //changes state according to user input
  setEventSummary = (e) => {
    this.setState({
      eventSummary: e.target.value,
    });
  };
  setEventDate = (e) => {
    this.setState({
      eventDate: e.target.value,
    });
  };

  //logs user in to their google account
  handleClick = () => {
    ApiCalendar.handleAuthClick();
  };

  createEvent = () => {
    var gapi = window.gapi;
    let theEvent = {
      summary: this.state.eventSummary,

      start: {
        date: this.state.eventDate,
      },
      end: {
        date: this.state.eventDate,
      },
    };
    let calendarId = "primary";

    //we have access to createEvent function via the react-google-calendar-api-gem
    //ApiCalendar.createEvent(event: object, calendarId: string = this.calendar)
    ApiCalendar.createEvent(theEvent, calendarId);

    var request = gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: theEvent,
    });
    //opens the user's google calendar in a new tab featuring the newly created event
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

          <h4>First:</h4>
          <Button
            className="mb-3"
            style={{ width: 100, height: 50 }}
            onClick={this.handleClick}
          >
            Sign in
          </Button>

          <h4>Then:</h4>
          <Form>
            <Form.Row>
              <Col xs="auto">
                <Form.Control
                  onChange={(e) => this.setEventSummary(e)}
                  placeholder="Plant Care Event Name"
                />
              </Col>
              <Col xs="auto">
                <Form.Control
                  onChange={(e) => this.setEventDate(e)}
                  type="date"
                  placeholder="yyyy/mm/dd"
                />
              </Col>
            </Form.Row>
          </Form>
          <Button
            className="mb-5"
            style={{ width: 100, height: 50 }}
            onClick={this.createEvent}
          >
            Add an Event
          </Button>
        </Container>
      </>
    );
  }
}

export default Calendar;
