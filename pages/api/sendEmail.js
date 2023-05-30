


import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'singhsidhant338@gmail.com',
    pass: 'fmfncbgpfzwfmhra',
  },
});

export default async function handler(req, res) {
  const { name, email, message, number, subject } = req.body;

  try {
    await transporter.sendMail({
      from: 'singhsidhant338@gmail.com',
      to: 'info@sheroincorp.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nPhone: ${number}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${message}`,
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
}