import React from 'react';
import { Typography, Box } from '@mui/material';

export default function HomeIntro() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      color: 'white',
      paddingY: 10,
      textAlign: 'center',
    }}>
      
      <Typography variant="h5" component="p" color="white" sx={{ maxWidth: '1500px', margin: 'auto', fontSize : "20pt" }}>
        At AgBioTech Consultancy, we specialize in driving innovation in &nbsp;
        <Typography component="span" variant="h5" sx={{ fontWeight: 'bold', color: 'darkgreen', maxWidth: '1500px', margin: 'auto', fontSize : "20pt"}}>
          precision agriculture, bioinformatics, and IT solutions
        </Typography>.
        Our mission is to empower businesses by providing tailored consultancy services, actionable insights, and cutting-edge technology. Whether you're optimizing agricultural processes, building bioinformatics pipelines, or advancing IT infrastructure, we’re here to help you grow and succeed. Discover how AgBioTech Consultancy can transform your business today.
      </Typography>

    </Box>

  );
}
