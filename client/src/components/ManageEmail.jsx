/*

This React component is a form for creating and sending a custom email or a template email. 
The recipient of the email can be either "All", "Scheduled Volunteers" or a custom recipient, depending on which button is clicked. 
The subject and body of the email can be filled in by the user, or a template can be selected by clicking 
one of the three buttons at the bottom. 
When the "Clear" button is clicked, all fields are reset. 
When the "Send" button is clicked, a confirmation prompt appears and, if confirmed, the email is sent.

To connect this frontend component to a MariaDB database, a backend developer would need to add logic for querying 
the database to retrieve the list of recipients and, when the "Send" button is clicked, insert the email data into the database. 
For example, when the "All" button is clicked, the backend could query the database for all email addresses to populate 
the recipient field. 
When the "Send" button is clicked, the backend could insert the recipient, subject, and body into the appropriate 
tables in the database.

At the bottom, there is some inserted logic and some comments to dictate what recipient should be emailed and what the content
of the email should be. 
For each bit of logic, create a SQL query to insert the recipient, subject, and body of the email into the 
appropriate table in the database. 


This React component was initially created by Mason Williamson, Lauren Good and Payton Morris. This project was done for
CSCI 331 - Web Development on request of our instructor, Daniel DeFrance. This component is not a deliverable or complete product, 
and therefore is acceptable for any other developer to use this code to further it's design.

*/

import React, { useState } from 'react';
import './ManageEmail.css';

const ManageEmail = (props) => {

/*
    "Send to" useState declarations
*/

  // "All" button
  const [button1,setButton1] = useState(false);
  // "Scheduled volunteers" button
  const [button2,setButton2] = useState(false);
  // Custom recipient input box
  const [recipientBox, setRecipientBox] = useState("");

  // If the "All" button is selected...
  const handleButton1Click = () => {
    setButton1(true);
    setButton2(false);
    setRecipientBox("");
  }

  // If the "Scheduled Volunteers" button is selected...
  const handleButton2Click = () => {
    setButton1(false);
    setButton2(true);
    setRecipientBox("");
  }

/*
    Subject and Body declarations:
*/

  // "Voucher template" button 
  const [button3,setButton3] = useState(false);
  // "Cancellation template" button
  const [button4,setButton4] = useState(false);
  // "Waiver template" button
  const [button5,setButton5] = useState(false);
  // Custom subject input box
  const [subjectBox, setSubjectBox] = useState("");
  // Custom body input box
  const [bodyBox, setBodyBox] = useState("");

  // Voucher template button is selected...
  const handleButton3Click = () => {
    setButton3(true);
    setButton4(false);
    setButton5(false);
    setSubjectBox("");
    setBodyBox("");
  }

  // Cancellation template button is selected...
  const handleButton4Click = () => {
    setButton3(false);
    setButton4(true);
    setButton5(false);
    setSubjectBox("");
    setBodyBox("");
  }

  // Waiver template button is selected...
  const handleButton5Click = () => {
    setButton3(false);
    setButton4(false);
    setButton5(true);
  }


  return ( 

      <div>
      <h2>New Email</h2>
      <label>Send to:</label>
      <div>
        <input type="text" value={recipientBox} onChange={e => {  // Recipient input box
          setRecipientBox(e.target.value)
          setButton1(false) 
          setButton2(false)
          }}/>
        <button onClick={handleButton1Click} className={button1 ? 'on' : 'off'}>All</button>    {/*All button */}
        <button onClick={handleButton2Click} className={button2 ? 'on' : 'off'}>Scheduled Volunteers</button>   {/*Scheduled Voluteers button */}
      </div><label>Subject:</label><div>
        <input type="text" value={subjectBox} onChange={e => { //Subject input box
          setSubjectBox(e.target.value)
          setButton3(false) 
          setButton4(false)
          setButton5(false)
          }}/>
      </div><label>Body:</label><div>
        <button onClick={handleButton3Click} className={button3 ? 'on' : 'off'}>Voucher Template</button>       {/*Voucher template button */}
        <button onClick={handleButton4Click} className={button4 ? 'on' : 'off'}>Cancellation Template</button>  {/*Cancellation template button */}
        <button onClick={handleButton5Click} className={button5 ? 'on' : 'off'}>Waiver Template</button>        {/*Waiver template button */}
      </div><label>Custom:</label><div>
        <input type="text" value={bodyBox} onChange={e => {   // Body input box
          setBodyBox(e.target.value)
          setButton3(false) 
          setButton4(false)
          setButton5(false)
          }}/>
      </div><div>
        <button className="clearBtn"                          // Clear button
          onClick={() => {
            const confirmBox = window.confirm(
              "Are you sure you want to clear all fields?"
            );
            if (confirmBox === true) {
              setRecipientBox("");
              setSubjectBox("");
              setBodyBox("");
              setButton1(false);
              setButton2(false);
              setButton3(false);
              setButton4(false);
              setButton5(false);
            }
          } }
        >Clear</button>
        <button className="sendBtn"                         // send button
          onClick={() => {
            const confirmBox = window.confirm(
              "Are you sure you want to send this email?"
            );
            if (confirmBox === true) {

            /*

              For each comment below, the following logic determines who the email is sent to, as well as the subject and body of the
              email. Use the comments as a guide to understand what each button means and extend this functionality to add the email
              data to the backend database. From there, the data can be used to send an email using whatever API is running.

            */

              if (button1 === true) {
                /* 
                ADD BACKEND FUNCTIONALITY
                Recipient: select ALL entries in the database to send this email to 
                */
              }
              else if (button2 === true) {
                /* 
                ADD BACKEND FUNCTIONALITY
                Recipient: select only the volunteers from TODAY to send this email to 
                */
              }
              else {
                /* 
                ADD BACKEND FUNCTIONALITY
                Recipient: select the value of hook "recipientBox" to send this email to 
                */
              }

              if (button3 === true) {
                /* 
                ADD BACKEND FUNCTIONALITY
                Template: Send a copy of the selected user's voucher template
                */
              }              

              else if (button4 === true) {
                /* 
                ADD BACKEND FUNCTIONALITY
                Template: Send an email template regarding cancellation of a race or of some other regard.
                          This template should be set up in the back-end
                */
              }

              else if (button5 === true) {
                /* 
                ADD BACKEND FUNCTIONALITY
                Template: Send a copy of the selected user's BSF waiver that they signed. 
                          Another group's feature might have included a copy of a user's waver being stored in the backend.
                          Look for that or work with another group's feature to add that functionality.
                          If not feasible, remove this option.
                */
              }

              else {
                /* 
                ADD BACKEND FUNCTIONALITY
                Template: Send the email with the subject as the hook "subjectBox" and the body of the email as the hook "bodyBox"
                */
              }
              alert("email sent");

              setRecipientBox("");
              setSubjectBox("");
              setBodyBox("");
              setButton1(false);
              setButton2(false);
              setButton3(false);
              setButton4(false);
              setButton5(false);
            }
          } }
        >Send Email</button>
      </div>
    </div>
  )
}
export default ManageEmail;