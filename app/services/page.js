import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import Link from 'next/link';


const services = [
  {
    title: 'Precision Agriculture',
    description: 'Using drones, DSS, and robotics for smarter field management.',
    page_link : "/services/agriculture"
  },
  {
    title: 'Bioinformatics Support',
    description: 'Setting up bioinformatics pipelines for data-driven innovation.',
    page_link : "/services/ds"
  },
  {
    title: 'IT Solutions',
    description: 'Innovative IT services to boost digital infrastructure.',
    page_link : "/services/it"
  },
];

export default function Services() {
  return (
    <>

      {/* Hero Section */}
      <Box
        sx={{
          // backgroundImage: 'url("/services.png")',  // Replace with a hero image related to services
          backgroundColor: 'primary.main',
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          paddingY: 10,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{fontSize : "40pt", fontWeight : "bold"}}>
          Our Services
        </Typography>
        <Typography variant="h6" component="p" sx={{ maxWidth: 600, margin: 'auto' }}>
          Providing expert guidance in biotechnology, precision agriculture, bioinformatics, and IT services to help you innovate and grow.
        </Typography>
      </Box>

      {/* Services Section */}
      <Container sx={{ paddingY: 2 }}>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 2,
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                </CardContent>

                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                  {/* Link added to handle navigation */}
                  <Link href={service.page_link} passHref>
                    <Button variant="contained" color="primary">
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </>
  );
}
