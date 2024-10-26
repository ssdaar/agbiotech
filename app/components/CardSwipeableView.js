"use client";
import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AgricultureCard from './AgricultureCard';
import BioinformaticsCard from './BioinformaticsCard';
import TechnologyCard from './TechnologyCard';

export default function CardsSwipeableView() {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Change '3' to the number of slides you have
    }, 10000); // 10 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const slides = [
    { component: <AgricultureCard />, key: 'agriculture' },
    { component: <BioinformaticsCard />, key: 'bioinformatics' },
    { component: <TechnologyCard />, key: 'technology' }
  ];

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      {/* Swipeable Views with one card per slide */}
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {slides.map(({ component, key }) => (
          <Box key={key} sx={{ display: 'flex', justifyContent: 'center', height: "50vh" }}>
            {component}
          </Box>
        ))}
      </SwipeableViews>

      {/* Backward Button */}
      <IconButton
        onClick={() => handleChangeIndex(index === 0 ? slides.length - 1 : index - 1)}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'skyblue',
          color: 'white',
          '&:hover': {
            backgroundColor: 'deepskyblue',
          },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Forward Button */}
      <IconButton
        onClick={() => handleChangeIndex((index + 1) % slides.length)}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'skyblue',
          color: 'white',
          '&:hover': {
            backgroundColor: 'deepskyblue',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
