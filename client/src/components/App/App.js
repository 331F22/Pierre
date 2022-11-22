import React from "react";
import "./App.css";
import AddEntry from "../AddEntry.jsx";
import CurrentEntries from "../CurrentEntries.jsx";
import OrderVolunteers from "../OrderVolunteersByRepeatedService.jsx";
import Footer from "../Footer.jsx";
import logo from "../images/BSFlogo.jpg";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="BSF logo" />
      <div className="Mission">
        <p>
          <div className="MissionHeader">Mission Statment</div>
          <div className="MissionQuotes">
            "Offering educational and competitive programs in Alpine, Nordic,
            Freestyle, and Freeskiing. Grooming cross-country ski trails for the
            Bozeman community."
          </div>
        </p>
      </div>
      <hr></hr>
      <h1>Volunteer Now!</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      <OrderVolunteers />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
