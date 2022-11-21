import { useState, useRef } from "react";
import axios from "axios";

const AddEntry = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [skiClub, setSkiClub] = useState("");
  const [date, setDate] = useState("");
  const [entryList, setEntryList] = useState([]);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  // CREATE (POST)
  function submitEntry() {
    axios
      .post(`${process.env.REACT_APP_HOST}/api/create`, {
        first: firstName,
        last: lastName,
        email: emailAddress,
        ski: skiClub,
        date: date,
      })
      .then((response) => {
        setEntryList([
          ...entryList,
          {
            first_name: firstName,
            last_name: lastName,
            email_address: emailAddress,
            time_in: date,
            ski_club: skiClub,
          },
        ]);
      });

    ref1.current.value = "";
    setFirstName("");
    ref2.current.value = "";
    setLastName("");
    ref3.current.value = "";
    setEmailAddress("");
    ref4.current.value = "";
    setSkiClub("");
    ref5.current.value = "";
    setDate("");
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="addEntry">
      <div id="userInput">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            ref={ref1}
            id="firstName"
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            ref={ref2}
            id="lastName"
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div className="emailField">
          <label htmlFor="email">Email Address</label>
          <input
            ref={ref3}
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="skiClub">
          <label htmlFor="skiClub">Ski Club</label>
          <input
            ref={ref4}
            id="skiClub"
            type="skiClub"
            name="skiClub"
            onChange={(e) => setSkiClub(e.target.value)}
          />
        </div>
        <div className="date">
          <label htmlFor="date">Voulenteer Date</label>
          <input
            ref={ref5}
            id="date"
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          className="submitBtn"
          onClick={() => {
            if (
              firstName.length > 0 &&
              lastName.length > 0 &&
              emailAddress.length > 0 &&
              skiClub.length > 0 &&
              date.length > 0
            ) {
              submitEntry();
              refreshPage();
            }
          }}
        >
          Add Entry
        </button>
      </div>
    </div>
  );
};

export default AddEntry;
