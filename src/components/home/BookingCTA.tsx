import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-border">
      {/* Background Arch Overlay Image with Soft Luxury Gradient */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80"
          alt="Nivara Hotels evening ambiance"
          className="w-full h-full object-cover filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/90 border border-border backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
            Reservations · Nivara Hotels
          </span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-[1.14]">
          Your next stay begins at <br />
          <span className="italic font-normal text-primary">Nivara.</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          Discover a considered stay where comfort, character, and thoughtful hospitality come together.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="luxury"
            size="luxuryLg"
            onClick={() => navigate('/rooms')}
          >
            <span>Explore Rooms</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
      </div>
    </section>
  );
};
