import React from 'react';
import { Box, Typography, Container, Grid2, Card, CardContent } from '@mui/material';

const services = [
  {
    title: 'Bioinformatics Consulting',
    description: `Our bioinformatics consulting services provide expert support at any stage of your project. 
    Whether you’re planning an experiment, navigating large-scale biological datasets, or needing bioinformatics personnel 
    to support your team, we are here to help. We assist with experimental design, data analysis using cutting-edge bioinformatics 
    methodologies, and provide rapid results. Every step of the process is discussed in detail to ensure you gain maximum insights.`,
    benefits: [
      'Expert support for experimental design and data analysis',
      'Quick turnaround time using advanced bioinformatics tools',
      'Tailored consulting to meet your specific project needs',
      'Full transparency and detailed discussions on methodologies'
    ],
  },
  {
    title: 'Computational Biology',
    description: `Our interdisciplinary team supports computational biology projects by ensuring sound methodology 
    and insightful biological interpretation of results. From grant proposals to final reporting, we assist at any stage of your research project. 
    Our services range from data analysis and result interpretation to literature research and scientific writing, ensuring you have a comprehensive 
    understanding of your data and its implications.`,
    benefits: [
      'End-to-end project support from grant proposal to final report',
      'Comprehensive result interpretation grounded in biological knowledge',
      'Support with literature research, scientific writing, and reporting',
      'Expertise in experimental design and data visualization'
    ],
  },
  {
    title: 'Breeding Bioinformatics & AgriGenomics',
    description: `In the field of plant breeding and improvement, we leverage bioinformatics to help breeders assess 
    genetic resources and identify key genes linked to important traits like stress resistance and yield. 
    Using genomics, transcriptomics, proteomics, and more, we provide tailored services like re-sequencing, SNP discovery, and genome-wide diversity studies. 
    Our goal is to accelerate breeding programs through bioinformatics-driven precision.`,
    benefits: [
      'In-depth support for genomics, transcriptomics, proteomics, and more',
      'Accelerated selection through omics-based predictions',
      'Comprehensive genotyping, marker identification, and QTL mapping services',
      'Tailored solutions to address specific breeding challenges'
    ],
  },
  {
    title: 'Scientific Programming',
    description: `We offer custom software development and data management solutions designed for research projects 
    that require repetitive, systematic, and reproducible processes. With expertise in various programming languages and databases, 
    we help clients develop custom tools for data integration, processing, and visualization, ensuring faster and more accurate results.`,
    benefits: [
      'Custom software development for research projects',
      'Support for various programming languages and database systems',
      'Optimized tools for data integration, analysis, and visualization',
      'Reproducible and efficient data processing methodologies'
    ],
  },
  {
    title: 'Data Science & Analytics',
    description: `Our data science and analytics services help manage and analyze large-scale biological datasets, 
    including both structured and unstructured data. With a focus on omics data, we offer solutions for exploratory data analysis, machine learning, 
    and inferential statistics. Our goal is to extract valuable insights from complex datasets, turning raw data into actionable knowledge.`,
    benefits: [
      'Advanced analysis of omics data and high-dimensional datasets',
      'Machine learning solutions for predictive insights',
      'Data visualization to make complex data accessible',
      'Statistical modeling and exploratory data analysis'
    ],
  },
];

export default function pages() {
  return (
    <>
      {/* Hero Section */}
      <Box

        sx={{
          backgroundImage: 'url("/bioinfo.jpeg")',  // Add an appealing image for the hero section
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
          Data Science & Bioinformatics Services
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
                    Key Benefits:
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
