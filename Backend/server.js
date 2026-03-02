import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
  
const app = express()
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT ||5000
dotenv.config();

const Transporter = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
  });

app.post('/contact', async (req,res) => {
    console.log(req.body);
  const {name,email,message} = req.body
    const mailOption={
        to: process.env.EMAIL_USER,
        from: process.env.EMAIL_USER,
        replyTo: email,
        subject:`New Contact Message from ${name}`,
        text: ` 
        Name:${name} 
        Email:${email} 
        Message:${message}`
    };

    try {
        await Transporter.sendMail(mailOption);
        res.status(200).json({success:'Message sent successfully!'});
    }
    catch (error){
        console.error(error)
        res.status(500).json({error:"Something went wrong:"});
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
