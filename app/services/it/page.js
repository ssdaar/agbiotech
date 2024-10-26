import React from 'react';
import { Box, Typography, Container, Grid2, Card, CardContent } from '@mui/material';

const services = [
  {
    title: 'UX Research',
    description: `Our UX research services use both qualitative and quantitative methods to gain deep insights into user needs. 
    We help businesses understand user behaviors, motivations, and pain points, allowing them to design better, user-centered products. 
    With in-depth user interviews, surveys, and data analytics, we ensure your product decisions are backed by research.`,
    benefits: [
      'Understand user behaviors and preferences',
      'Improve product usability and functionality',
      'Increase user satisfaction and engagement',
      'Data-driven decision making for product development'
    ],
  },
  {
    title: 'Usability Evaluation',
    description: `We identify and fix user experience issues with heuristic evaluations and usability testing. 
    Our experts conduct detailed analyses to discover usability problems, provide actionable insights, and test designs with real users to 
    optimize functionality and user satisfaction.`,
    benefits: [
      'Identify usability issues early in development',
      'Improve ease of use and overall user experience',
      'Reduce user frustration and improve retention',
      'Enhance product efficiency and accessibility'
    ],
  },
  {
    title: 'UI Design',
    description: `Our team crafts captivating and pixel-perfect UI designs that not only look stunning but also align with user needs and business goals. 
    With a focus on clarity, consistency, and intuitive interactions, our designs ensure a seamless user experience across digital platforms.`,
    benefits: [
      'Visually appealing and intuitive interfaces',
      'Consistent design language across platforms',
      'Increased user engagement and satisfaction',
      'Boost brand image and credibility with professional design'
    ],
  },
  {
    title: 'App Development',
    description: `We specialize in creating intuitive and user-friendly mobile applications for iOS and Android platforms. 
    From concept to launch, our development team delivers apps that meet user expectations while achieving business goals, 
    ensuring a smooth, engaging mobile experience.`,
    benefits: [
      'Custom mobile apps for iOS and Android',
      'Optimized performance and smooth user experience',
      'Scalable and secure app architecture',
      'Ongoing support and updates for app improvements'
    ],
  },
  {
    title: 'Web Development',
    description: `Our web development services provide tailored, scalable solutions to meet your business needs. 
    Whether you need a website from scratch or a revitalized online presence, we build responsive, SEO-friendly, and high-performance websites 
    that drive traffic, engage users, and convert visitors into customers.`,
    benefits: [
      'Responsive, mobile-friendly website designs',
      'Optimized for performance and search engine rankings',
      'Custom solutions for e-commerce, blogs, or corporate sites',
      'Continuous support and maintenance for long-term success'
    ],
  },
  {
    title: 'Digital Marketing',
    description: `Our digital marketing team creates impactful social media content and implements strategic marketing plans 
    to increase brand visibility, drive engagement, and grow your customer base. We help businesses develop campaigns that resonate with their target audience 
    and deliver measurable results.`,
    benefits: [
      'Increased online presence and brand awareness',
      'Targeted social media and digital marketing strategies',
      'Boost engagement through creative content',
      'Detailed analytics to measure marketing performance'
    ],
  },
];

const recentProjects = [
  {
    title: 'UX Research',
    description: `Our UX research services use both qualitative and quantitative methods to gain deep insights into user needs. 
        We help businesses understand user behaviors, motivations, and pain points, allowing them to design better, user-centered products. 
        With in-depth user interviews, surveys, and data analytics, we ensure your product decisions are backed by research.`,
    benefits: [
      'Understand user behaviors and preferences',
      'Improve product usability and functionality',
      'Increase user satisfaction and engagement',
      'Data-driven decision making for product development'
    ],
  }

]
export default function ITServices() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/IT.jpeg")', // Replace with an IT services relevant image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'primary.main',
          paddingY: 10,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography className="block-text"
          variant="h3" component="h1" gutterBottom sx={{ fontSize: "40pt", fontWeight: "bold", color: "green" }}>
          IT Services
        </Typography>
      </Box>
      {/* Services Section */}
      <Container sx={{ paddingY: 2 }}>
        <Grid2 container spacing={2}>
          {services.map((service, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
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

                  <Typography variant="subtitle1" component="div" gutterBottom>
                    Benefits:
                  </Typography>
                  <ul>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>
                        <Typography variant="body2" color="text.secondary">
                          {benefit}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </>
  );
}
