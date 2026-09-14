import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArchImage } from '../shared/ArchImage';
import { BookingBar, BookingSearchDetails } from '../BookingBar';

interface HeroSectionProps {
  onOpenBooking: (room?: any, details?: BookingSearchDetails) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Hero Content */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-card border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              NIVARA HOTELS · JAIPUR
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-[-0.02em] leading-[1.08] text-foreground">
            Stay <br />
            somewhere <br />
            <span className="italic font-normal text-primary">worth</span> <br />
            remembering.
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-lg">
            Thoughtfully designed rooms, quiet spaces, and warm hospitality come together for a stay that feels effortlessly yours.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              variant="luxury"
              size="luxuryLg"
              onClick={() => navigate('/rooms')}
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              variant="luxuryOutline"
              size="luxuryLg"
              onClick={onOpenBooking}
            >
              <span>Book a Stay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Trust Pill / Rating badge */}
          <div className="pt-4 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Patron"
                className="w-7 h-7 rounded-full border-2 border-background object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Patron"
                className="w-7 h-7 rounded-full border-2 border-background object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                alt="Patron"
                className="w-7 h-7 rounded-full border-2 border-background object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-foreground font-medium">4.98</span>
              <span className="text-muted-foreground/70">· Welcoming discerning travelers in Jaipur</span>
            </div>
          </div>
        </div>

        {/* Right Hero Arch Image Frame */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Primary Arch Image */}
            <ArchImage
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
              alt="Nivara Courtyard Atrium with illuminated pool arches"
              aspectRatio="aspect-[4/5]"
              caption="Courtyard Atrium"
              subcaption="Evening Reflection Pool · Amber Foothills"
              badge="SANCTUARY I"
              badgePosition="top-right"
            />

            {/* Overlapping Suite Card */}
            <div className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-44 sm:w-56 z-20 shadow-2xl">
              <div className="p-1 rounded-2xl bg-background border border-border overflow-hidden">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card">
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
                    alt="Heritage Suite"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px]">
                    <div>
                      <p className="font-serif font-medium text-foreground">Heritage Suite</p>
                      <p className="text-[9px] text-primary">₹28,000 / night</p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-primary text-primary-foreground font-bold text-[9px]">
                      ★ 5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Booking Search Bar across bottom */}
      <div className="mt-16 sm:mt-20">
        <BookingBar onSearch={(details) => onOpenBooking(undefined, details)} />
      </div>
    </section>
  );
};
