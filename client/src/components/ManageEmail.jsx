import React from 'react';

const ManageEmail = () => {

  return ( 

    <div>
      <h2>New Email</h2>
      <label>Send to:</label>
      <div>
        <input id="customEmail" type="text" name="email" />
        <button className="OptionBtn">All</button>
        <button className="OptionBtn">Scheduled Volunteers</button>
      </div>
      <label>Subject:</label>
      <div>
        <input id="customSubject" type="text" name="subject" />
      </div>
      <label>Body:</label>
      <div>
        <button className="OptionBtn">Voucher Template</button>
        <button className="OptionBtn">Cancellation Template</button>
        <button className="OptionBtn">Waiver Template</button>
      </div>
      <label>Custom:</label>
      <div>
        <input id="customBody" type="text" name="body" />
      </div>
      <div>
        <button className="clearBtn"
        onClick={() => {
          const confirmBox = window.confirm(
            "Are you sure you want to clear all fields?"
          )
          if(confirmBox === true) {
            alert("fields cleared")
          }
        }}
        >Clear</button>
        <button className="sendBtn"                         // send button
          onClick={() => {
            const confirmBox = window.confirm(
              "Are you sure you want to send this email?"
            )
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