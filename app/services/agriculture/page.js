import React from 'react';
import { Container, Card, CardContent, CardActions, Typography, Button, Box, Grid2 } from '@mui/material';

export default function pages() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("/agriculture.jpeg")', // Add a suitable image for Precision Agriculture
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'primary.main',
          paddingY: 10,
          // color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className="block-text"
          sx={{
            fontSize: "40pt",
            fontWeight: "bold",
            color: "white", // Primary color inside the text

          }}
        >
          Precision Agriculture
        </Typography>

      </Box>



      {/* Content Section */}
      <Container sx={{ paddingY: 5 }}>
        <Grid2 container spacing={2}>
          <Grid2 item xs={12} sm={6} md={4}>
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
                  Drone Technology
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our advanced drone systems provide real-time aerial monitoring, allowing farms to assess crop health,
                  track growth stages, and optimize irrigation with precision.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
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
                  Robotics
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our autonomous farming robots handle tasks such as planting, weeding, and harvesting, significantly reducing
                  manual labor while increasing efficiency and precision.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
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
                  Decision Support Systems (DSS)
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our DSS technology integrates real-time data from various sources, providing actionable insights to farmers
                  for making informed decisions on planting, watering, and fertilizing.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
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
                  Data Analytics
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Through precision data analytics, we help farms analyze soil health, crop performance, and environmental factors,
                  leading to better yield predictions and more efficient resource allocation.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
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
                  Irrigation Automation
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Our irrigation automation systems use sensors and weather data to optimize water usage, ensuring crops get
                  the right amount of water at the right time, reducing waste and improving yields.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} sm={6} md={4}>
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
                  Sustainability & Climate Monitoring
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  We offer climate monitoring solutions that help farms adapt to changing weather patterns and implement
                  sustainable practices to mitigate the effects of climate change on agriculture.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
