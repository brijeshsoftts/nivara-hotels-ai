import React from 'react';
import { Plus, Users, Maximize2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Room } from '../types';

interface RoomCardProps {
  room: Room;
  onSelect: (room: Room) => void;
  featured?: boolean;
  className?: string;
}

export const RoomCard: React.FC<RoomCardProps> = ({
  room,
  onSelect,
  featured = false,
  className = '',
}) => {
  return (
    <Card
      variant={featured ? "featured" : "hotel"}
      className={`group relative flex flex-col overflow-hidden ${className}`}
    >
      {/* Image Container with arch-inspired framing */}
      <div className="relative p-2.5 sm:p-3">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl bg-background">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

          {/* Luxury Tag Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="luxury">
              {room.tag}
            </Badge>
          </div>

          {/* Featured pill badge if featured */}
          {featured && (
            <div className="absolute top-4 right-4">
              <Badge variant="default" className="rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em]">
                Patron Favorite
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-6">
        <div className="space-y-3">
          {/* Header & Price */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h3 className="font-serif text-xl sm:text-2xl text-card-foreground group-hover:text-primary transition-colors">
              {room.name}
            </h3>
            <div className="text-left sm:text-right">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">
                from{' '}
                <span className="text-base sm:text-lg font-serif font-medium text-primary">
                  {room.priceFormatted}
                </span>
                {' '}/ night
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm font-light text-muted-foreground line-clamp-2 leading-relaxed">
            {room.shortDescription}
          </p>

          {/* Key Specs Grid */}
          <div className="pt-2 grid grid-cols-2 gap-2 text-[11px] text-muted-foreground border-t border-border pt-3">
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-3 h-3 text-primary" />
              <span>{room.sizeM2} m² / {room.sizeSqFt} sq ft</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3 h-3 text-primary" />
              <span>{room.guests} Guests ({room.bedType})</span>
            </div>
            {room.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground truncate">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button using shadcn Button */}
        <div>
          <Button
            variant={featured ? "luxury" : "luxuryOutline"}
            size="luxuryMd"
            className="w-full"
            onClick={() => onSelect(room)}
          >
            <span>Reserve Suite</span>
            <Plus className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
