import { useState, useRef } from 'react';
import axios from 'axios'

const AddEntry = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [entryList, setEntryList] = useState([])

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

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
  
  return (
    <div className="addEntry">
      <h2>Volunteer Sign Up</h2>
        <div id='userInput'>
          <div class="form-floating mb-3">
            <label htmlFor="firstName">First Name</label>
            <input className="signInput" ref={ref1} id="firstName" type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div class="form-floating mb-3">
            <label htmlFor="lastName">Last Name</label>
            <input className="signInput" ref={ref2} id="lastName" type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
          </div><br />
          <div class="form-floating mb-3"  >
            <label htmlFor="email">Email Address</label>
            <input className="signInput" ref={ref3} id="email" type="email" name="email" onChange={(e) => setEmailAddress(e.target.value)} />
          </div>
          <button type="button" class="btn btn-danger" className="submitBtn"
            onClick={() => {
              if (firstName.length > 0 && lastName.length > 0 && emailAddress.length > 0) {
                submitEntry(); refreshPage();
              }
            }}
          >Sign Up</button>
   
        </div>
      </div>
    )
  }

export default AddEntry;
