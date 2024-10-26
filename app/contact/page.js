
"use client"
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Alert, Grid2 } from '@mui/material';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    emailjs.send(
      'service_uls0bx3',  // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID'      // Replace with your EmailJS user ID
    ).then(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }).catch((error) => {
      setError(error.text);
    });
  };

  return (
    <>
    <Grid2  container columnGap={4} sx={{padding : 10}}>

      <Grid2 item >
      <Typography variant="h4" gutterBottom align="left" sx={{fontSize : "30pt", fontWeight : "bold"}}>
        Contact Us
      </Typography>

      </Grid2>
      <Grid2 item sx={{width : "50%"}} >
      {isSubmitted && (
        <Alert severity="success" sx={{ marginBottom: 2 }}>
          Your message has been sent successfully!
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          There was an error sending your message: {error}
        </Alert>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          type="email"
        />
        <TextField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </Box>
        </Grid2>

    </Grid2>



    </>
  );
}