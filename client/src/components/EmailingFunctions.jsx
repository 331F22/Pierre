import React from 'react';

function GetVolunteers(){

}

function GetVouchers(){

}

function SendEmail(volunteers, vouchers){
    window.Email.send({
        SecureToken : "3983d558-27b3-4f11-b915-6285e740374a ",
        To : 'roisin.m.manning@gmail.com',
        From : "groupsixteenbsf@gmail.com",
        Subject : "Bridger Ski  Foundation",
        Body : "And this is the body. email sent!"
    }).then(
        message => alert(message)
    );

}

function EmailSender(){
    const volunteers = GetVolunteers();
    const vouchers = GetVouchers();
    SendEmail(volunteers, vouchers)

}

export default EmailSender;
