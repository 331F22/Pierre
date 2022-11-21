import React from "react";
import "./App.css";
import AddEntry from "../AddEntry.jsx";
import CurrentEntries from "../CurrentEntries.jsx";
import Footer from "../Footer.jsx";
import logo from '../images/BSFlogo.jpg';

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="BSF logo" />
      <div className="Mission">
        <p>
          <div className="MissionHeader"></div>
            <div className="MissionQuotes">
              Volunteer and help your community! If you volunteer with BSF you will not only help your community but 
              also receive a FREE ski pass to Bridger Bowl Ski Area!
            </div> 
        </p>
      </div>
      <hr></hr>
      <h1>Volunteer Now!</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
