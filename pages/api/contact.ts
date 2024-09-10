// pages/api/contact.ts

import { sendMail } from '@/app/lib/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
sendMail // Import your sendMail function here

// Adjust the interface to match the expected structure
interface SendMailOptions {
  email: string; // Add the missing `email` field
  sendTo?: string; // Optional field if applicable
  subject: string;
  text: string;
  html?: string; // Optional field if applicable
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body as { name: string; email: string; message: string };

    // Update mail options to match the required type
    const mailOptions: SendMailOptions = {
      email: email, // This field is required
      sendTo: 'your-email@example.com', // Use `sendTo` if required by your sendMail function
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    try {
      await sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
