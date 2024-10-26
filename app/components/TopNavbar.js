import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function TopNavbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#595959',
        padding: '0.5rem 2rem',
        color: 'white',
      }}
    >
      {/* Left side: Contact Info */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Phone sx={{ marginRight: '0.5rem' }} />
        <Typography variant="body2" sx={{ marginRight: '2rem' }}>
          +49 --- --- ---
        </Typography>
        <Email sx={{ marginRight: '0.5rem' }} />
        <Typography variant="body2">info@agbiotech.de</Typography>
      </Box>

      {/* Right side: Social Media Icons */}
      <Box>
        <IconButton sx={{ color: 'white' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
