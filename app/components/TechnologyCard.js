import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function TechnologyCard() {
  return (
      <Card
        sx={{
          width: '100%',                  // Full width card
          padding: 4,                     // Padding inside the card
          boxShadow: 3,                   // Adds subtle shadow for effect
          position: 'relative',           // Allow absolute positioning of content if needed
          backgroundImage: 'url("/IT.jpeg")', // Replace with your image path
          backgroundSize: 'cover',        // Cover entire card
          backgroundPosition: 'right',    // Focus image on the right side
          backgroundRepeat: 'no-repeat',  // Ensure the image doesn't repeat
  
        }}
      >
        <CardContent sx={{width : "40%", backgroundColor : "lightgrey", opacity : "80%"}} >
        <Typography  variant="h3" component="div" gutterBottom fontSize={"40pt"} fontWeight={"bold"}>
            Information Technology
          </Typography>
          <Typography variant="p" fontSize={18} fontWeight={"bold"}>
          Our web design, development, and IT services help biotech and agricultural companies embrace the digital age, with solutions ranging from website creation to custom software and cloud-based infrastructure.
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'left',width : "35%", backgroundColor : "lightgrey", opacity : "80%" }}>

        <Link href="/services/it" passHref>
        <Button variant="contained" color="primary">
            Learn More
          </Button>
          </Link>

        </CardActions>
      </Card>
  );
}
