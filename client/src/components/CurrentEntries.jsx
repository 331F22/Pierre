import { useState, useRef, useEffect } from 'react';
import axios from 'axios'

const CurrentEntries = () => {

  const SECRET = process.env.REACT_APP_PASSCODE

  const [entryList, setEntryList] = useState([])


  // READ (GET)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_HOST}/api/read`).then((response) => {
      setEntryList(response.data)
    })
  }, [])

  const [newEmail, setNewEmail] = useState('')
  const [passcode, setPasscode] = useState('')

  function getObjectByValue(objVal) {
    let objectWithValue = {}
    entryList.forEach(entry => {
      if (Object.values(entry).indexOf(objVal) > -1) { // email value is inside obj inside array
        console.log('entry', entry)
        objectWithValue = entry
      }
    })
    return objectWithValue
  }

  // DELETE
  const deleteEntry = (email) => { // deletes ALL such email instances in the database
    axios.delete(`${process.env.REACT_APP_HOST}/api/delete/${email}`).then((response) => {
      let objToDelete = getObjectByValue(email)
      const index = entryList.indexOf(objToDelete) // deletes ONE instance in the state var
      if (index > -1) {
        let entryListCopy = [...entryList] // copy
        entryListCopy.splice(index, 1) // remove index
        setEntryList(entryListCopy)
      }
    }) //close .then()
  }

  // UPDATE (PUT)
  const updateEmail = (email) => { // replaces ALL such email instances in the database
    axios.put(`${process.env.REACT_APP_HOST}/api/update`, { old: email, new: newEmail }).then((response) => {
      let objToChange = getObjectByValue(email)
      const index = entryList.indexOf(objToChange)  // deletes ONE instance in the state var
      objToChange.email_address = newEmail
      if (index > -1) {
        let entryListCopy = [...entryList]
        entryListCopy[index] = objToChange
        setEntryList(entryListCopy)
      }
    }) //close .then()

    setNewEmail('') // clear all update email input fields
    let updateInputs = document.getElementsByClassName('updateInput');
    for (let i = 0; i < updateInputs.length; i++) {
      updateInputs[i].value = ''
    }
  }

  //Send emails
  /*
  const sendEmails = () =>{
    
  //email template code
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': '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'
    },
    body: JSON.stringify({
      sender: {name: 'BSF Dummy (who it from)', email: 'bsfdummy12@gmail.com'},
      inlineImageActivation: false,
      params: {newKey: 'New Value'},
      sendAtBestTime: false,
      abTesting: false,
      ipWarmupEnable: false,
      tag: 'BSF Volunteer Codes',
      name: 'BSF Volunteer Codes',
      htmlContent: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"> <head>   <meta http-equiv="X-UA-Compatible" content="IE=edge" />   <meta name="viewport" content="width=device-width, initial-scale=1" />   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   <meta name="apple-mobile-web-app-capable" content="yes" />   <meta name="apple-mobile-web-app-status-bar-style" content="black" />   <meta name="format-detection" content="telephone=no" />   <title>SendinBlue</title>   <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,400,600,700,800,400italic" rel="stylesheet" type="text/css" />   <style type="text/css">     *{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}     body{font-family:helvetica,arial,sans-serif;}     table{margin:0 auto;}     div,a,li,td{-webkit-text-size-adjust:none;}     @media screen{body{font-family:"open sans",helvetica,arial,sans-serif;}}     @media only screen and (max-width:640px){table[class=full]{width:100%!important;}}     @media only screen and (max-width:479px){table[class=fullcenter]{width:100%!important;text-align:center!important;}}   </style> </head> <body style="margin:0;padding:0;"> <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#ffffff" style="background:#ffffff;">   <tbody>   <tr>     <td>       <table class="full" align="center" width="570" border="0" cellpadding="0" cellspacing="0" style="padding:0 5px;">         <tbody>         <tr>           <td height="30" width="100%"></td>         </tr>         <!---------------------- begin Content -------------------->         <!-- Title -->         <tr>           <td align="center" style="padding:0 20px;text-align:center;font-size:20px;color:#676a6c;line-height:30px;font-weight:600;" valign="middle" width="100%">             Thank you for Volunteering with Bridger Ski Foundation!           </td>         </tr>         <!-- /Title -->         <tr>           <td height="30" width="100%"></td>         </tr>         <!-- Button -->          <!-- Texte -->         <tr>           <td align="center" style="padding:0 20px;text-align:center;font-size:14px;color:#676a6c;line-height:24px;" valign="middle" width="100%">             Here is your Bridger ski ticket code:                        tempskicode           </td>         </tr>         <!-- /Text -->         <tr>           <td height="30" width="100%"></td>         </tr>         <!---------------------- end Content ---------------------->         <tr>           <td height="40" width="100%"></td>         </tr>         <tr>         </tr>         <tr>           <td height="40" width="100%"></td>         </tr>         </tbody>       </table>     </td>   </tr>   </tbody> </table> </body> </html>',
      replyTo: 'bsfdummy12@gmail.com',
      toField: '{volunteer first name} {volunteer last name}',
      subject: 'BSF Volunteer Codes'
    })
  };
  
  fetch('https://api.sendinblue.com/v3/emailCampaigns', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
} 
*/

}


export default CurrentEntries;
