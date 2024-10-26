import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function BioinformaticsCard() {
  return (
<Card
      sx={{
        width: '100%',                  // Full width card
        padding: 4,                     // Padding inside the card
        boxShadow: 3,                   // Adds subtle shadow for effect
        position: 'relative',           // Allow absolute positioning of content if needed
        backgroundImage: 'url("/bioinfo.jpeg")', // Replace with your image path
        backgroundSize: 'cover',        // Cover entire card
        backgroundPosition: 'right',    // Focus image on the right side
        backgroundRepeat: 'no-repeat',  // Ensure the image doesn't repeat
      }}
    >
        <CardContent sx={{width : "35%", backgroundColor : "lightgrey", opacity : "80%"}} >
        <Typography  variant="h3" component="div" gutterBottom fontSize={"40pt"} fontWeight={"bold"}>
        Bioinformatics
          </Typography>
          <Typography variant="p" fontSize={18} fontWeight={"bold"}>
          From setting up advanced lab infrastructures to developing bioinformatics pipelines, we enable research teams to streamline data processing and unlock insights from complex biological data.
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'left',width : "35%", backgroundColor : "lightgrey", opacity : "80%" }}>
        <Link href="/services/ds" passHref>
        <Button variant="contained" color="primary">
            Learn More
          </Button>
          </Link>
        </CardActions>
      </Card>
  );
}
