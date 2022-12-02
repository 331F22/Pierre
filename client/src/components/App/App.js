import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import BanEntry from '../BanEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'

function App() {

  return (
    <div className="App">

      <AddEntry />
      <div id = "AddEntryLine"><hr /></div>
      <CurrentEntries />
      <hr />
      <Footer />
    </div>
  )
}

export default App;

