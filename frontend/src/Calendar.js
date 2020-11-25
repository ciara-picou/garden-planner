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
      //summary: "Repot Poinsettia",
       'summary': this.state.eventSummary,

      start: {
        //date: "2020-12-05",
         'date': this.state.eventDate
      },
      end: {
        //date: "2020-12-05",
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
          {/* <Button variant="primary" type="submit">
            Add an Event
            </Button> */}
          <Button style={{ width: 100, height: 50 }} onClick={this.createEvent}>
            Add an Event
          </Button>
          {/* <Button onClick={handleClick} style={{width: 100, height: 50}} type="submit">Add an Event</Button> */}
          <br></br>
          <br></br>
        </Container>
      </>
    );
  }
}

//  import React from 'react';
//  import Header from './components/Header';
// import Footer from './components/Footer';
// import {Container} from 'react-bootstrap';

// function App() {
//   var gapi = window.gapi
//     //var CLIENT_ID= "775784690447-e5fi59p25rf96he80jmovk80j8vc9ja6.apps.googleusercontent.com"
//     var CLIENT_ID= "346203473408-9d0b8e4tjivtm49ottqkg327poga2lbs.apps.googleusercontent.com"
//     var API_KEY= "AIzaSyBN1sUMQo6rRDSbE0asrRYBg-9KXq7N_ik"
//     var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
//     var SCOPES = ["https://www.googleapis.com/auth/calendar", "https://www.googleapis.com/auth/calendar.events"]
//     //var SCOPES = "https://www.googleapis.com/auth/calendar.events";
//     // try this
//     //var SCOPES = "https://www.google.com/calendar/feeds";
//      //var SCOPES= "https://www.googleapis.com/auth/calendar"
//     const handleClick = () => {
//         gapi.load('client:auth2', () => {
//           console.log("loaded client")

//           gapi.client.init({
//             apiKey: API_KEY,
//             clientId: CLIENT_ID,
//             discoveryDocs: DISCOVERY_DOCS,
//             scope: SCOPES,
//           })

//           gapi.client.load('calendar', 'v3', () => console.log('bam!'))

//           gapi.auth2.getAuthInstance().signIn()
//           .then(() => {

//             var event = {
//               'summary': 'Water Geranium',
//               // 'location': '800 Howard St., San Francisco, CA 94103',
//               // 'description': 'A chance to hear more about Google\'s developer products.',
//               'start': {
//                 'dateTime': '2020-11-28T09:00:00-07:00',
//                 'timeZone': 'America/Los_Angeles'
//               },
//               'end': {
//                 'dateTime': '2020-11-28T17:00:00-08:00',
//                 'timeZone': 'America/Los_Angeles'

//               },
//               // 'recurrence': [
//               //   'RRULE:FREQ=DAILY;COUNT=2'
//               // ],
//               // 'attendees': [
//               //   {'email': 'lpage@example.com'},
//               //   {'email': 'sbrin@example.com'}
//               // ],
//               // 'reminders': {
//               //   'useDefault': false,
//               //   'overrides': [
//               //     {'method': 'email', 'minutes': 24 * 60},
//               //     {'method': 'popup', 'minutes': 10}
//               //   ]
//               // }
//             };

// var request = gapi.client.calendar.events.insert({
//   // 'calendarId': 'primary',
//    'calendarId': 'pikusaurus@gmail.com',
//   'resource': event,
// });

//  request.execute(event => {
//    window.open(event.htmlLink)
//  })
// })

//         })
//     }
//   return (
//   <>
//     <Header/>
//     <main>

//         <Container>
//           <h1>Garden Planner</h1>
//           <button onClick={handleClick}>Add Event</button>

//         </Container>

//     </main>
//     <Footer />
//   </>
//   );
// }
//  export default App;

export default Calendar;
