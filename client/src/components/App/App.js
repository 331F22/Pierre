import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import CurrentEntries from '../CurrentEntries.jsx';
import Footer from '../Footer.jsx'

function App() {

  return (
    <div className="App">
      <img src='BSFlogo.jpg' alt='bsf logo'/>
      <div className="Mission">
      <p>Offering educational and 
        competitive programs in Alpine, Nordic, Freestyle, and Freeskiing. And grooming 
        cross-country ski trails for the Bozeman community.</p>
      </div>
      <h1>Entries</h1>

      <AddEntry />
      <hr />
      <CurrentEntries />
      <hr />
      <Footer />
    </div>
  )
}

export default App;

