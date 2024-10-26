import React from 'react';
import { Box, Typography, Container, Grid2, Card, CardContent, CardMedia } from '@mui/material';

const teamMembers = [
  {
    name: 'Dr. Emma Watson',
    role: 'Lead Bioinformatics Scientist',
    image: '/images/emma-watson.jpg', // Add team member images
    bio: 'Emma has over 15 years of experience in bioinformatics and has led groundbreaking research in genomics.'
  },
  {
    name: 'John Doe',
    role: 'Precision Agriculture Expert',
    image: '/images/john-doe.jpg',
    bio: 'John specializes in precision agriculture, helping farms leverage cutting-edge technology for smarter management.'
  },
  {
    name: 'Jane Smith',
    role: 'IT Solutions Architect',
    image: '/images/jane-smith.jpg',
    bio: 'Jane is a leader in IT infrastructure design, helping organizations scale their digital ecosystems efficiently.'
  },
];

export default function About() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/images/biotech-hero.jpg")',  // Add a beautiful background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          paddingY: 10,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          About AgBioTech Consultancy
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 600, margin: 'auto' }}>
          Empowering biotech firms with cutting-edge solutions for agriculture, bioinformatics, and IT services.
        </Typography>
      </Box>
      <Container sx={{ paddingY: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At AgBioTech Consultancy, our mission is to empower biotech firms to achieve breakthrough innovations. We provide end-to-end consultancy services in precision agriculture, bioinformatics, and IT solutions. Whether you're working on optimizing crop yield through technology or building advanced bioinformatics pipelines, we have the expertise to help you succeed.
        </Typography>
      </Container>


    </>
  );
}
