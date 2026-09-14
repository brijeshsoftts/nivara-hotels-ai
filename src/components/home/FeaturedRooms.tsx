import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '../shared/SectionHeading';
import { RoomCard } from '../RoomCard';
import { ROOMS_DATA } from '../../data';
import { Room } from '../../types';

interface FeaturedRoomsProps {
  onOpenBooking: (room?: Room) => void;
}

export const FeaturedRooms: React.FC<FeaturedRoomsProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();
  // 3 featured rooms: Nivara Deluxe, Heritage Suite, Signature Residence
  const featuredRooms = [ROOMS_DATA[0], ROOMS_DATA[1], ROOMS_DATA[4]];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <SectionHeading
          eyebrow="Private Accommodations"
          title="Rooms designed"
          italicWord="for lingering."
        />
        <p className="text-xs sm:text-sm font-light text-muted-foreground max-w-md leading-relaxed md:text-right">
          A curated collection of expansive sanctuaries, tailored with artisan millwork, acoustic solitude, and thoughtful hotel amenities.
        </p>
      </div>

      {/* 3 Featured Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredRooms.map((room, index) => (
          <RoomCard
            key={room.id}
            room={room}
            onSelect={(r) => onOpenBooking(r)}
            featured={index === 1} // Heritage Suite highlighted
          />
        ))}
      </div>

      {/* View All CTA */}
      <div className="mt-16 text-center">
        <Button
          variant="luxuryOutline"
          size="luxuryLg"
          onClick={() => navigate('/rooms')}
        >
          <span>View All Rooms</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </section>
  );
};
