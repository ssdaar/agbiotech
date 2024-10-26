import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function AgricultureCard() {
  return (
      <Card
        sx={{
          width: '100%',                  // Full width card
          padding: 4,                     // Padding inside the card
          boxShadow: 3,                   // Adds subtle shadow for effect
          position: 'relative',           // Allow absolute positioning of content if needed
          backgroundImage: 'url("/agriculture.jpeg")', // Replace with your image path
          backgroundSize: 'cover',        // Cover entire card
          backgroundPosition: 'right',    // Focus image on the right side
          backgroundRepeat: 'no-repeat',  // Ensure the image doesn't repeat
          
          }}
      >

        <CardContent sx={{width : "35%", backgroundColor : "lightgrey", opacity : "80%"}} >
        <Typography  variant="h3" component="div" gutterBottom fontSize={"40pt"} fontWeight={"bold"}>
        Agriculture
          </Typography>
          <Typography variant="p" fontSize={18} fontWeight={"bold"}>
          We empower farms with cutting-edge automation technologies such as robotics, drones, and decision support systems (DSS) for smarter field management and precision agriculture.
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'left',width : "35%", backgroundColor : "lightgrey", opacity : "80%" }}>
        <Link href="/services/agriculture" passHref>
        <Button variant="contained" color="primary">
            Learn More
          </Button>

        </Link>
        </CardActions>
      </Card>
  );
}

