import { useState, useRef } from 'react';

import ToggleSwitch from "./ToggleSwitch";
import axios from 'axios'
import React from 'react';

const AddEntry = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [entryList, setEntryList] = useState([])

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const waiverBox = document.querySelector('#waiver')

  // CREATE (POST)
  function submitEntry() {
    axios.post(`${process.env.REACT_APP_HOST}/api/create`, { first: firstName, last: lastName, email: emailAddress }).then((response) => {
      setEntryList([...entryList, { first_name: firstName, last_name: lastName, email_address: emailAddress }]
      )
    })

    ref1.current.value = ""
    setFirstName('')
    ref2.current.value = ""
    setLastName('')
    ref3.current.value = ""
    setEmailAddress('')
  }
  
  function refreshPage() {
    window.location.reload(false);
  }
  function waiver() {
    window.open('https://www.waiverfile.com');
  }


  
  return (
    <div className="addEntry">
      <h2>Add an Entry</h2>
      <div id='userInput'>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input ref={ref1} id="firstName" type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input ref={ref2} id="lastName" type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
        </div><br />
        <div className="emailField" >
          <label htmlFor="email">Email Address</label>
          <input ref={ref3} id="email" type="email" name="email" onChange={(e) => setEmailAddress(e.target.value)} />
        </div>

      </div>

      <div className="container1">
        <React.Fragment>
          <h6>Sign Digital Waiver?</h6>
          <ToggleSwitch label ="waiver" />
        </React.Fragment>
      </div>
      <div id='userInput'>
        <button className="submitBtn"
          onClick={() => {
            if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0 && !waiverBox.checked) {
              submitEntry(); refreshPage();
            }
            else if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0 && waiverBox.checked){
                  waiver(); submitEntry(); refreshPage();
            }
          }}
        >Add Entry</button>
      </div>

    </div>
  )
}

export default AddEntry;
