import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="header">
        <h1 className="large-screen-heading">
          Maangalyam: Where Love Finds its Forever
        </h1>
       

        <h2 className="large-screen-heading-h2">
          Discover Endless Possibilities in Your Matrimony Journey
        </h2>
        
      </div>

      <div className="center-container">
        <button className="start-btn">Start Your Journey</button>
      </div>

      <div className="home-container">
        <div className="image-container">
          <img src="/Images/1.png" alt="1" className="image" />
          <img src="/images/2.png" alt="3" className="image" />
          <img src="/images/3.png" alt="3" className="image" />
        </div>


        
      </div>




      
    </div>
  );
};

export default Home;