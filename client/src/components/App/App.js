import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import WaiverPage from "../WaiverPage";
import Footer from '../Footer.jsx'

function App() {

  return (
    <div className="App">
      <h1>Entries</h1>

      <AddEntry />
        <WaiverPage />
      <hr />
      <CurrentEntries />
      <hr />

      <Footer />
    </div>
  )
}

export default App;

