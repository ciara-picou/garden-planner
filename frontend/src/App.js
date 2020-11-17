import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import Image from './img.jpg'

var sectionStyle = {
  backgroundImage: `url(${Image})`
}
function App() {
  return (
  <>
    <Header/>
    <main>
      
        <Container>
          <h1>Garden Planner</h1>
        </Container>
     
    </main>
    <Footer />
  </>
  );
}

export default App;
