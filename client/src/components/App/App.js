import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import ManageEmail from '../ManageEmail.jsx';
import Header from '../Header.js';
import Footer from '../Footer.js';
import logo from "../header.jpg";
import Feeter from '../Footer.jsx';


function App() {

  return (
    <div className="App">
      <img className="logo" src={logo} alt="BSF Logo" />
  
      <Header />
      <hr />
      <AddEntry />
      <hr />
      <ManageEmail />
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
      <hr />
      <Feeter />
      <hr />
    </div>
  )
}

export default App;

