import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import PlantContainer from './PlantContainer'
import DiscussionBoard from './DiscussionBoard'
import SickBack from './SickBack'
import Calendar from './Calendar'

function App() {

  

  return (

    <>
     <Header/>
     <main>
      
         <Container>
           <h1>Garden Planner</h1>
           <PlantContainer/>
           <Calendar/>
           <DiscussionBoard/>
        </Container>
     
     </main>
     <Footer />
   </>
  );
}

export default App;


