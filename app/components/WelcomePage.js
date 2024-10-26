"use client";
import React from 'react';
import HomeIntro from './HomeIntro';
import CardsSwipeableView from './CardSwipeableView';

export default function WelcomePage() {
    return (
        <div>
            <HomeIntro />
            <CardsSwipeableView />
        </div>
    );
}
