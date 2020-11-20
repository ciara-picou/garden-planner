import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';

function Calendar() {
  
    // var gapi = window.gapi
    // var CLIENT_ID= "775784690447-e5fi59p25rf96he80jmovk80j8vc9ja6.apps.googleusercontent.com"
    // var API_KEY= "AIzaSyBN1sUMQo6rRDSbE0asrRYBg-9KXq7N_ik"
    // var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    // var SCOPES = "https://www.googleapis.com/auth/calendar.events";
    // // try this 
    // //var SCOPES = "https://www.google.com/calendar/feeds";
    //  //var SCOPES= "https://www.googleapis.com/auth/calendar" 
    // const handleClick = () => {
    //     gapi.load('client:auth2', () => {
    //       console.log("loaded client")
           
    //       gapi.client.init({
    //         apiKey: API_KEY,
    //         clientId: CLIENT_ID,
    //         discoveryDocs: DISCOVERY_DOCS,
    //         scope: SCOPES,
    //       })

    //       gapi.client.load('calendar', 'v3', () => console.log('bam!'))
          
    //       gapi.auth2.getAuthInstance().signIn()
    //       .then(() => {

    //         var event = {
    //           'summary': 'Google I/O 2015',
    //           'location': '800 Howard St., San Francisco, CA 94103',
    //           'description': 'A chance to hear more about Google\'s developer products.',
    //           'start': {
    //             'dateTime': '2015-05-28T09:00:00-07:00',
    //             'timeZone': 'America/Los_Angeles'
    //           },
    //           'end': {
    //             'dateTime': '2015-05-28T17:00:00-07:00',
    //             'timeZone': 'America/Los_Angeles'
    //           },
    //           'recurrence': [
    //             'RRULE:FREQ=DAILY;COUNT=2'
    //           ],
    //           'attendees': [
    //             {'email': 'lpage@example.com'},
    //             {'email': 'sbrin@example.com'}
    //           ],
    //           'reminders': {
    //             'useDefault': false,
    //             'overrides': [
    //               {'method': 'email', 'minutes': 24 * 60},
    //               {'method': 'popup', 'minutes': 10}
    //             ]
    //           }
    //         };

    //         var request = gapi.client.calendar.events.insert({
    //           'calendarId': 'primary',
    //           'resource': event,
    //         });
            
    //          request.execute(event => {
    //            window.open(event.htmlLink)
    //          })
    //       })
          
    //     })
    // }
        
  return (
  <>
    <Header/>
    <main>
      
        <Container>
          <h1>Garden Planner</h1>
  {/* <button onClick={handleClick}>Add Event</button> */}
        </Container>
     
    </main>
    <Footer />
  </>
  );
}

export default Calendar;
