import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import Details from './Components/Details'
import FormJoinUsToday from './Components/FormJoinUsToday'
import Services from './Components/Services'
import Footer from './Components/Footer'



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Details />
  <FormJoinUsToday />
  < Services />
        <Footer />
    


     
    
    </div>
  );
}

export default App;
