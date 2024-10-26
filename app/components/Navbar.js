// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
//         {/* Logo or Text on the Left */}
//         <div className="text-xl font-bold">
//           <Link href="/">AgBioTech Consultancy</Link>
//         </div>

//         {/* Links on the Right */}
//         <ul className="flex space-x-6">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           {/* Dropdown for Services */}
//           <li className="relative group">
//           <Link href="/services">
//             <span className="cursor-pointer">Services</span>
//             </Link>
            
//             {/* Dropdown menu */}
//             <ul className="absolute left-0 hidden mt-1 space-y-2 bg-gray-700 p-4 rounded-lg group-hover:block">
//               <li>
//                 <Link href="/services/agriculture" className="block text-white hover:bg-gray-600 p-2 rounded">
//                   Precision Agriculture
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/ds" className="block text-white hover:bg-gray-600 p-2 rounded">
//                   Bioinformatics Support
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services/it" className="block text-white hover:bg-gray-600 p-2 rounded">
//                   IT Solutions
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link href="/blog">Blog</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Box, Button, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TopNavbar from './TopNavbar';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width:600px)'); // True if screen width is 600px or more

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  // Update active page title based on the current path
  useEffect(() => {
    const pathToPage = {
      "/": "Home",
      "/services": "Services",
      "/blog": "Blog",
      "/contact": "Contact",
    };
    setActivePage(pathToPage[pathname] || "Home");
  }, [pathname]);

  return (
    <AppBar position="relative" sx={{ backgroundColor: 'gray.800' }}>
              {isDesktop && <TopNavbar />}

      <Toolbar sx={{ justifyContent: { xs: 'space-between', md: 'space-between' } }}>
        
        {/* Mobile Menu Icon on Left */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Display TopNavbar only on desktop */}

        {/* Active Page Title, only on mobile */}
        {!isDesktop && (
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>
            {activePage}
          </Typography>
        )}

       {/* Drawer for Mobile Menu */}
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250, paddingTop: 2 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component="a" href="/" onClick={() => setActivePage("Home")}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="/services" onClick={() => setActivePage("Services")}>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button component="a" href="/blog" onClick={() => setActivePage("Blog")}>
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem button component="a" href="/contact" onClick={() => setActivePage("Contact")}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
