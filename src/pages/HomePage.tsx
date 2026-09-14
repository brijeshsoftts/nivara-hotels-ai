import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { HotelIntroduction } from '../components/home/HotelIntroduction';
import { FeaturedRooms } from '../components/home/FeaturedRooms';
import { AmenitiesSection } from '../components/home/AmenitiesSection';
import { WhyNivara } from '../components/home/WhyNivara';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { ContactPreview } from '../components/home/ContactPreview';
import { BookingCTA } from '../components/home/BookingCTA';
import { BookingSearchDetails } from '../components/BookingBar';
import { Room } from '../types';

interface HomePageProps {
  onOpenBooking: (room?: Room, details?: BookingSearchDetails) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. Hero Section with Headline, CTAs, Floating Search Bar & Arch Image */}
      <HeroSection onOpenBooking={(room, details) => onOpenBooking(room, details)} />

      {/* 2. Hotel Introduction ("A quieter kind of luxury.") */}
      <HotelIntroduction />

      {/* 3. Featured Rooms ("Rooms designed for lingering.") */}
      <FeaturedRooms onOpenBooking={onOpenBooking} />

      {/* 4. Hotel Amenities ("Everything considered for your stay.") */}
      <AmenitiesSection />

      {/* 5. Why Nivara ("The details make the difference.") */}
      <WhyNivara />

      {/* 6. Testimonials ("Guests remember how we made them feel.") */}
      <TestimonialsSection />

      {/* 7. FAQ Section ("Questions, answered.") */}
      <FAQSection />

      {/* 8. Contact Preview ("Planning your stay?") */}
      <ContactPreview onOpenBooking={() => onOpenBooking()} />

      {/* 9. Booking CTA ("Your next stay begins at Nivara.") */}
      <BookingCTA onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
