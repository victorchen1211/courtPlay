import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CityMarquee from '@/components/CityMarquee';
import ActivityGrid from '@/components/ActivityGrid';
import DayTimeline from '@/components/DayTimeline';
import FounderStory from '@/components/FounderStory';
import ReviewsSection from '@/components/ReviewsSection';
import PromoteSection from '@/components/PromoteSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#fffbf7' }}>
      <Navbar />
      <HeroSection />
      <CityMarquee />
      <ActivityGrid />
      <DayTimeline />
      <FounderStory />
      <ReviewsSection />
      <PromoteSection />
      <Footer />
    </main>
  );
}
