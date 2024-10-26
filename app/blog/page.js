import React from 'react';
import { Container, Grid2, Card, CardContent, Typography, CardMedia, Button, Box } from '@mui/material';
import Link from 'next/link';
import blogPosts from './blogs.json';

export default function Blog() {
  return (
    <>
      <main>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            paddingY: 10,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{fontSize : "40pt", fontWeight : "bold"}}>
            Our Latest Insights & Articles
          </Typography>
          <Typography variant="h6" component="p" sx={{ maxWidth: '650px', margin: 'auto' }}>
            Stay updated with the latest trends, expert insights, and industry best practices across precision agriculture, bioinformatics, and IT solutions.
          </Typography>
        </Box>
<Container sx={{paddingY:2}}>
<Grid2 container direction={"column"} spacing={1}>
{blogPosts.map((post, index) => (
  <Grid2 item xs={12} md={4} key={index}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          <Link href={`/blog/${post.title}`}>
          {post.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  </Grid2>

))}
</Grid2>
</Container>
      </main>
    </>
  );
}
