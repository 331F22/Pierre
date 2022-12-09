import React from 'react';
import './App.css';
import AddEntry from '../AddEntry.jsx';
import Header from '../Header.jsx';
import Waiver from '../Waiver.jsx';
import CurrentEntries from '../CurrentEntries.jsx';

import Footer from '../Footer.jsx'

function App() {

  return (
    <div className="App">
	<Header/>
	
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



