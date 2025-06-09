import nodemailer from 'nodemailer';

function mandaEmail() {
    const transportador = nodemailer.createTransport({
       service: "gmail",
       auth: {
            user: "",
            pass: ""
       } 
    });

    
}