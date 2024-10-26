// import React from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import { Phone, Email } from '@mui/icons-material';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// export default function TopNavbar() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#595959',
//         padding: '0.5rem 2rem',
//         color: 'white',
//       }}
//     >
//       {/* Left side: Contact Info */}
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <Phone sx={{ marginRight: '0.5rem' }} />
//         <Typography variant="body2" sx={{ marginRight: '2rem' }}>
//           +49 --- --- ---
//         </Typography>
//         <Email sx={{ marginRight: '0.5rem' }} />
//         <Typography variant="body2">info@agbiotech.de</Typography>
//       </Box>

//       {/* Right side: Social Media Icons */}
//       <Box>
//         <IconButton sx={{ color: 'white' }}>
//           <TwitterIcon />
//         </IconButton>
//         <IconButton sx={{ color: 'white' }}>
//           <LinkedInIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }


import Link from 'next/link';

export default function TopNavbar() {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        {/* Logo or Text on the Left */}
        <div className="text-xl font-bold">
          <Link href="/">AgBioTech Consultancy</Link>
        </div>

        {/* Links on the Right */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/* Dropdown for Services */}
          <li className="relative group">
          <Link href="/services">
            <span className="cursor-pointer">Services</span>
            </Link>
            
            {/* Dropdown menu */}
            <ul className="absolute left-0 hidden mt-1 space-y-2 bg-gray-700 p-4 rounded-lg group-hover:block">
              <li>
                <Link href="/services/agriculture" className="block text-white hover:bg-gray-600 p-2 rounded">
                  Precision Agriculture
                </Link>
              </li>
              <li>
                <Link href="/services/ds" className="block text-white hover:bg-gray-600 p-2 rounded">
                  Bioinformatics Support
                </Link>
              </li>
              <li>
                <Link href="/services/it" className="block text-white hover:bg-gray-600 p-2 rounded">
                  IT Solutions
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}