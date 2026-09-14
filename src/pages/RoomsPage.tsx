import React, { useState } from 'react';
import {
  Users,
  BedDouble,
  Sparkles,
  Calendar,
  Utensils,
  Moon,
  Wind,
  Coffee,
  MessageSquare,
} from 'lucide-react';
import { ROOMS_DATA, INCLUDED_SERVICES } from '../data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Room } from '../types';
import { useNavigate } from 'react-router-dom';

interface RoomsPageProps {
  onOpenBooking: (room?: Room) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Collections');
  const navigate = useNavigate();

  const categories = ['All Collections', 'Suites', 'Residences', 'Villas'];

  const filteredRooms =
    activeCategory === 'All Collections'
      ? ROOMS_DATA
      : ROOMS_DATA.filter((room) => room.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 sm:pt-14 pb-12">
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Accommodations
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-[1.12]">
            Spaces designed for <br />
            <span className="italic font-normal text-primary">beautiful stays.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully composed rooms and expansive residences where natural textures, quiet daylight, and effortless comfort come together.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full text-xs font-medium uppercase tracking-[0.16em] ${
                activeCategory === cat
                  ? 'bg-secondary text-secondary-foreground border border-primary/40 shadow-md shadow-primary/10 hover:bg-secondary'
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* 2. EDITORIAL ASYMMETRIC ROOM COLLECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
        <div className="space-y-12">
          {/* Row 1: Nivara Deluxe (left) + Heritage Suite (right large featured) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Nivara Deluxe */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-card border border-border p-6 sm:p-7 group">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-background">
                  <img
                    src={ROOMS_DATA[0].image}
                    alt={ROOMS_DATA[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="hotel">
                      Courtyard View
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Collection 01 — Room
                    </span>
                    <span className="text-[10px] text-muted-foreground">42 m² / 452 FT²</span>
                  </div>
                  <h3 className="font-serif text-2xl text-card-foreground">
                    {ROOMS_DATA[0].name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {ROOMS_DATA[0].shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground pt-3 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-primary" /> 2 Guests
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-3 h-3 text-primary" /> King Bed
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary" /> Freestanding Tub
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Nightly Rate</span>
                  <span className="font-serif text-xl text-primary font-medium">₹18,500</span>
                  <span className="text-[10px] text-muted-foreground"> / night</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onOpenBooking(ROOMS_DATA[0])}
                  className="rounded-full text-xs font-semibold uppercase tracking-[0.16em]"
                >
                  Reserve Room
                </Button>
              </div>
            </div>

            {/* Heritage Suite (Featured Wide with Arch Motif) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-card border border-primary/30 p-6 sm:p-8 shadow-2xl shadow-background/50 group">
              <div className="space-y-6">
                {/* Arch-shaped showcase image */}
                <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-t-[100px] sm:rounded-t-[140px] rounded-b-2xl overflow-hidden border border-primary/20 bg-background">
                  <img
                    src={ROOMS_DATA[1].image}
                    alt={ROOMS_DATA[1].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="luxury">
                      Curated Sanctuary
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-4 text-[11px] text-foreground font-serif">
                    Heirloom flora outlook & limestone hearth
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                      Collection 02 — Curated Suite
                    </span>
                    <span className="text-[10px] text-muted-foreground">68 m² / 732 FT²</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-serif text-3xl sm:text-4xl text-card-foreground">
                      {ROOMS_DATA[1].name}
                    </h3>
                    <div>
                      <span className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                        ₹28,000
                      </span>
                      <span className="text-xs text-muted-foreground"> / night</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {ROOMS_DATA[1].shortDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-border text-[11px] text-muted-foreground">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/70">Bedding</span>
                    <span className="text-foreground font-medium">Master King Bed</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/70">Occupancy</span>
                    <span className="text-foreground font-medium">2 Guests</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/70">Salon</span>
                    <span className="text-foreground font-medium">Private Living Lounge</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider block text-muted-foreground/70">Storage</span>
                    <span className="text-foreground font-medium">Walk-in Dressing</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Butler service & in-suite welcome bar included</span>
                </div>
                <Button
                  variant="luxury"
                  size="luxuryMd"
                  onClick={() => onOpenBooking(ROOMS_DATA[1])}
                >
                  Book Heritage Suite
                </Button>
              </div>
            </div>
          </div>

          {/* Row 2: Atrium Terrace Room (left) + Nivara Grand Pavilion (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Atrium Terrace Room */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-card border border-border p-6 sm:p-7 group">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-background">
                  <img
                    src={ROOMS_DATA[2].image}
                    alt={ROOMS_DATA[2].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="hotel">
                      Skyline & Atrium View
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Collection 03 — Room
                    </span>
                    <span className="text-[10px] text-muted-foreground">50 m² / 538 FT²</span>
                  </div>
                  <h3 className="font-serif text-2xl text-card-foreground">
                    {ROOMS_DATA[2].name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {ROOMS_DATA[2].shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground pt-3 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-primary" /> 2 Guests
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-3 h-3 text-primary" /> Queen Bed
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-primary" /> Sunken Bathtub
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Nightly Rate</span>
                  <span className="font-serif text-xl text-primary font-medium">₹22,000</span>
                  <span className="text-[10px] text-muted-foreground"> / night</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onOpenBooking(ROOMS_DATA[2])}
                  className="rounded-full text-xs font-semibold uppercase tracking-[0.16em]"
                >
                  Reserve Room
                </Button>
              </div>
            </div>

            {/* Nivara Grand Pavilion */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-card border border-border p-6 sm:p-8 group">
              <div className="space-y-4">
                <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden bg-background">
                  <img
                    src={ROOMS_DATA[3].image}
                    alt={ROOMS_DATA[3].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="hotel">
                      Forest Canopy View
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge variant="luxury">
                      Private Plunge Pool
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Collection 04 — Pavilion Villa
                    </span>
                    <span className="text-[10px] text-muted-foreground">85 m² / 915 FT²</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-serif text-3xl text-card-foreground">
                      {ROOMS_DATA[3].name}
                    </h3>
                    <div>
                      <span className="font-serif text-2xl text-primary font-medium">₹42,000</span>
                      <span className="text-xs text-muted-foreground"> / night</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {ROOMS_DATA[3].shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-[11px] text-muted-foreground pt-2">
                  <span>● 4 Guests</span>
                  <span>● 2 King Beds</span>
                  <span>● Private Plunge Pool</span>
                  <span>● Open Fireplace</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Inclusive of daily private cabana service</span>
                <Button
                  variant="luxury"
                  size="luxurySm"
                  onClick={() => onOpenBooking(ROOMS_DATA[3])}
                >
                  Book Pavilion
                </Button>
              </div>
            </div>
          </div>

          {/* Row 3: Signature Residence (Dual Arch composition) + The Presidential Sanctuary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Signature Residence (Dual Arch Image composition) */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-card border border-border p-6 sm:p-8 group">
              <div className="space-y-6">
                {/* Dual Arch Images */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden border border-primary/30 bg-background">
                    <img
                      src={ROOMS_DATA[4].image}
                      alt="Signature Residence Master Bedroom"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-center text-[9px] uppercase tracking-[0.16em] text-primary bg-background/80 backdrop-blur-md py-1 rounded">
                      Master Bedroom & View
                    </div>
                  </div>
                  <div className="relative aspect-[3/4] rounded-t-full rounded-b-2xl overflow-hidden border border-primary/30 bg-background">
                    <img
                      src={ROOMS_DATA[4].secondaryImage || ROOMS_DATA[4].image}
                      alt="Signature Residence Salon"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-2 left-2 right-2 text-center text-[9px] uppercase tracking-[0.16em] text-primary bg-background/80 backdrop-blur-md py-1 rounded">
                      Private Salon & Dining
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Collection 05 — Multi-Room Residence
                    </span>
                    <span className="text-[10px] text-muted-foreground">92 m² / 990 FT²</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <h3 className="font-serif text-3xl text-card-foreground">
                      {ROOMS_DATA[4].name}
                    </h3>
                    <div>
                      <span className="font-serif text-2xl sm:text-3xl text-primary font-medium">
                        ₹56,000
                      </span>
                      <span className="text-xs text-muted-foreground"> / night</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {ROOMS_DATA[4].shortDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-[11px] text-muted-foreground">
                  <span>● 6 Guests</span>
                  <span>● 1 Master King + Guest Queen</span>
                  <span>● Butler Pantry</span>
                  <span>● Valley Panorama</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-muted-foreground">
                  Includes complimentary daily afternoon tea & laundry service
                </span>
                <Button
                  variant="luxury"
                  size="luxurySm"
                  onClick={() => onOpenBooking(ROOMS_DATA[4])}
                >
                  Reserve Residence
                </Button>
              </div>
            </div>

            {/* The Presidential Sanctuary (Tall Apex Penthouse) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-card border border-primary/40 p-6 sm:p-7 shadow-2xl shadow-background/50 group">
              <div className="space-y-4">
                {/* Arch-shaped showcase image */}
                <div className="relative aspect-[4/5] rounded-t-[140px] rounded-b-2xl overflow-hidden border border-primary/20 bg-background">
                  <img
                    src={ROOMS_DATA[5].image}
                    alt={ROOMS_DATA[5].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="luxury">
                      Penthouse Apex
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                      Collection 06 — The Apex
                    </span>
                    <span className="text-[10px] text-muted-foreground">140 m² / 1,506 FT²</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-card-foreground">
                    {ROOMS_DATA[5].name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {ROOMS_DATA[5].shortDescription}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-muted-foreground pt-2 border-t border-border">
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="text-foreground">6 Guests (3 Bedrooms)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Terrace:</span>
                    <span className="text-foreground">Private Infinity Spa Pool</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concierge:</span>
                    <span className="text-primary font-medium">Dedicated Majordomo</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Nightly Rate</span>
                  <span className="font-serif text-2xl text-primary font-medium">₹95,000</span>
                  <span className="text-[10px] text-muted-foreground"> / night</span>
                </div>
                <Button
                  variant="luxury"
                  size="luxurySm"
                  onClick={() => onOpenBooking(ROOMS_DATA[5])}
                >
                  Private Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "INCLUDED IN EVERY STAY" SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-primary font-semibold block mb-2">
              Standard of Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
              Included in Every Stay
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-md md:text-right">
            Every stay at Nivara is accompanied by tactile luxuries curated for complete physical restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INCLUDED_SERVICES.map((srv, idx) => {
            const Icon =
              srv.icon === 'Utensils'
                ? Utensils
                : srv.icon === 'Moon'
                ? Moon
                : srv.icon === 'Wind'
                ? Wind
                : srv.icon === 'Coffee'
                ? Coffee
                : Sparkles;

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-primary">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-serif text-base text-card-foreground">{srv.title}</h4>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. "SUITE SPECIFICATIONS & OVERVIEW" COMPARISON TABLE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-semibold block mb-2">
            At a Glance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
            Suite Specifications & Overview
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border text-[10px] uppercase tracking-[0.18em] text-foreground bg-muted">
                <TableHead className="py-4 px-5 text-foreground">Accommodation</TableHead>
                <TableHead className="py-4 px-4 text-foreground">Dimensions</TableHead>
                <TableHead className="py-4 px-4 text-foreground">Primary View</TableHead>
                <TableHead className="py-4 px-4 text-foreground">Private Balcony / Deck</TableHead>
                <TableHead className="py-4 px-4 text-foreground">Pool / Water Feature</TableHead>
                <TableHead className="py-4 px-4 text-foreground">Concierge Level</TableHead>
                <TableHead className="py-4 px-5 text-right text-foreground">Nightly Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ROOMS_DATA.map((r) => (
                <TableRow key={r.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="py-4 px-5 font-serif text-sm font-medium text-card-foreground">
                    {r.name}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-muted-foreground">{r.sizeM2} m² ({r.sizeSqFt} ft²)</TableCell>
                  <TableCell className="py-4 px-4 text-muted-foreground">{r.view}</TableCell>
                  <TableCell className="py-4 px-4 text-muted-foreground">{r.specs.terrace || 'Yes (Private Balcony)'}</TableCell>
                  <TableCell className="py-4 px-4 text-muted-foreground">{r.specs.tub || 'Freestanding Stone Tub'}</TableCell>
                  <TableCell className="py-4 px-4 text-muted-foreground">{r.specs.butler || 'Standard 24/7 Front Desk'}</TableCell>
                  <TableCell className="py-4 px-5 text-right font-serif font-semibold text-primary">
                    {r.priceFormatted}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* 5. EXTENDED STAYS / BESPOKE ITINERARY BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
              Private Consultations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-card-foreground">
              Seeking tailored suite configurations or extended stays?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              Our guest directors assist with multi-room wing reservations, private-culinary itineraries, floor buyouts, and seasonal retreat bookings.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate('/contact')}
            className="flex items-center gap-2 rounded-full font-medium uppercase tracking-[0.16em] text-xs shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            <span>Speak with Concierge</span>
          </Button>
        </div>
      </section>

      {/* 6. "RESERVE YOUR SANCTUARY" WIDGET */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.24em] text-primary font-semibold">
            Reserve Today
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
            Reserve your sanctuary.
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-md mx-auto">
            Plan your tranquil getaway with flexible cancellation and guaranteed best rates when booking direct.
          </p>
        </div>

        <div className="bg-card p-3 sm:p-4 rounded-3xl border border-border flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl">
          <div className="flex items-center gap-2 text-xs text-muted-foreground px-4 py-2 border-b sm:border-b-0 sm:border-r border-border w-full sm:w-auto">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Dates: Oct 14 — Oct 18</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground px-4 py-2 border-b sm:border-b-0 sm:border-r border-border w-full sm:w-auto">
            <Users className="w-4 h-4 text-primary" />
            <span>Guests: 2 Adults, 1 Room</span>
          </div>
          <Button
            variant="luxury"
            size="luxuryMd"
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto"
          >
            Check Availability
          </Button>
        </div>
      </section>
    </div>
  );
};
