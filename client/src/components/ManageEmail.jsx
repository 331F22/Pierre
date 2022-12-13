import React, { useState } from 'react';
import './ManageEmail.css';

const ManageEmail = (props) => {

  return ( 
    const [button1,setButton1] = useState(false);
    const [button2,setButton2] = useState(false);
    const [recipientBox, setRecipientBox] = useState("");
  
    const handleButton1Click = () => {
        setButton1(true);
        setButton2(false);
        setRecipientBox("");
      }
    
    const handleButton2Click = () => {
        setButton1(false);
        setButton2(true);
        setRecipientBox("");
      }
    
    const [button3,setButton3] = useState(false);
    const [button4,setButton4] = useState(false);
    const [button5,setButton5] = useState(false);
    const [subjectBox, setSubjectBox] = useState("");
    const [bodyBox, setBodyBox] = useState("");
    
    const handleButton3Click = () => {
        setButton3(true);
        setButton4(false);
        setButton5(false);
        setSubjectBox("");
        setBodyBox("");
      }
    
    const handleButton4Click = () => {
        setButton3(false);
        setButton4(true);
        setButton5(false);
        setSubjectBox("");
        setBodyBox("");
      }
    
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
            <input className="emailInput" type="text" value={recipientBox} onChange={e => {
                setRecipientBox(e.target.value)
                setButton1(false) 
                setButton2(false)
            }}/>   
            <button onClick={handleButton1Click} className={button1 ? 'on' : 'off'}>All</button>
            <button onClick={handleButton2Click} className={button2 ? 'on' : 'off'}>Scheduled Volunteers</button>
        </div>
        <label>Subject:</label>
        <div>   
            <input className="emailInput" type="text" value={subjectBox} onChange={e => {
                setSubjectBox(e.target.value)
                setButton3(false) 
                setButton4(false)
                setButton5(false)
            }}/> 
      </div>
      <label>Body:</label>
      <div>
            <button onClick={handleButton3Click} className={button3 ? 'on' : 'off'}>Voucher Template</button>
            <button onClick={handleButton4Click} className={button4 ? 'on' : 'off'}>Cancellation Template</button>
            <button onClick={handleButton5Click} className={button5 ? 'on' : 'off'}>Waiver Template</button>
    </div>
    <label>Custom:</label>
    <div>  
        <input className="emailInput" type="text" value={bodyBox} onChange={e => {
            setBodyBox(e.target.value)
            setButton3(false) 
            setButton4(false)
            setButton5(false)
        }}/>
    </div>
    <div>
        <button className="clearBtn"
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
    <button className="sendBtn"
      onClick={() => {
        const confirmBox = window.confirm(
          "Are you sure you want to send this email?"
          ); 
          if (confirmBox === true) {
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