import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart, Leaf, Sun, Droplets, Award } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CTASection } from '../components/CTASection';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      number: '01',
      title: 'Architectural Restraint',
      description:
        'We reject excessive ornamentation in favor of monolithic curves, generous arches, and unhurried negative space that calms the human nervous system.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Tactile Materiality',
      description:
        'Every surface your skin touches is authentic—raw unpolished sandstone, hand-loomed raw linen, reclaimed teak, and hand-beaten bronze hardware.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Unobtrusive Presence',
      description:
        'Our service philosophy is anticipation without interruption. Needs are silently met before you realize they have arisen.',
      icon: Heart,
    },
    {
      number: '04',
      title: 'A Sense of Place',
      description:
        'We are not a generic global template dropped into a landscape. Nivara breathes with its native earth, seasonal harvest, and centuries-old masonry lore.',
      icon: ShieldCheck,
    },
  ];

  const curators = [
    {
      name: 'Maya Sen',
      role: 'Founder & Creative Director',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'Former architectural historian whose travels across the sub-continent birthed the Nivara sanctuary ethos.',
    },
    {
      name: 'Julian Alvarez',
      role: 'Principal Architect · Studio Altar',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: 'Master of light and shadow, renowned for seamless indoor-outdoor transitions and monolithic sandstone archways.',
    },
    {
      name: 'Chef Aarav Mehta',
      role: 'Executive Culinary Director',
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80',
      bio: 'Pioneering micro-seasonal heirloom gastronomy harvested daily from our bio-dynamic estate greenhouse.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 sm:pt-14 pb-16">
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              About Nivara Hotels
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-[1.12]">
            Rooted in stillness. <br />
            <span className="italic font-normal text-primary">Crafted with purpose.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            A sanctuary born from the conviction that the most memorable places in the world are those that give you permission to slow down.
          </p>
        </div>

        {/* Master Arch Showcase Image */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-t-[140px] sm:rounded-t-[220px] rounded-b-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-background/60">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
              alt="The North Colonnade at Nivara"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-left gap-2">
              <div>
                <p className="font-serif text-lg sm:text-xl text-foreground">
                  The North Colonnade
                </p>
                <p className="text-xs text-muted-foreground">
                  Hand-sculpted stone arches designed by Studio Altar · Completed 2016
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-background/80 backdrop-blur-md text-primary border border-primary/30 w-fit">
                Pritzker Honored
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY / FOUNDING ETHOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Origins & Vision"
              title="Hospitality stripped"
              italicWord="of haste."
            />
            <p className="font-serif text-xl sm:text-2xl text-foreground font-light leading-snug">
              "We built Nivara for people who measure wealth not in speed, but in depth of attention."
            </p>
            <div className="p-4 rounded-2xl bg-card border border-border space-y-1">
              <p className="font-serif text-base text-primary">Maya Sen</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Founder & Keeper of Ethos
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base font-light text-muted-foreground leading-relaxed">
            <p>
              In 2015, Nivara took shape among the quiet rolling ridges of the Western Ghats foothills. We began with a single question: What if a hotel was not merely a vessel for sleep between itineraries, but an architectural destination that slowed your heart rate the moment you crossed its threshold?
            </p>
            <p>
              Rather than constructing high-density multi-story blocks, we laid out 32 independent pavilion sanctuaries separated by whispering bamboo groves and trickling water courses. We engaged local stonemasons whose families have worked the regional pink-hued granite for generations, ensuring every curve honors vernacular geometry.
            </p>
            <p>
              Today, Nivara stands as an international beacon for thoughtful, quiet luxury—a retreat cherished by writers, architects, travelers, and those who simply yearn to hear the dawn chorus uninterrupted by city traffic.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR PILLARS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <SectionHeading
            eyebrow="Our Foundation"
            title="The Pillars of"
            italicWord="Nivara."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="p-8 rounded-3xl bg-card border border-border flex flex-col justify-between space-y-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-primary/40 font-light">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-card-foreground">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm font-light text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SUSTAINABILITY & STEWARDSHIP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-accent font-semibold block">
              Environmental Stewardship
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-card-foreground">
              Sanctuary for the earth, not just our guests.
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
              We operate with a regenerative footprint. We hold the land in trust for the native flora and wildlife that have inhabited these valleys for millennia.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
              <Sun className="w-5 h-5 text-primary" />
              <h4 className="font-serif text-lg text-foreground">100% Solar Daylight</h4>
              <p className="text-[11px] text-muted-foreground">
                Complete daylight energy supplied by our hidden photovoltaic canopy.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
              <Droplets className="w-5 h-5 text-primary" />
              <h4 className="font-serif text-lg text-foreground">Zero Water Waste</h4>
              <p className="text-[11px] text-muted-foreground">
                Natural reed-bed filtration recycling all gray water into botanical gardens.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
              <Leaf className="w-5 h-5 text-primary" />
              <h4 className="font-serif text-lg text-foreground">Farm-to-Table</h4>
              <p className="text-[11px] text-muted-foreground">
                Estate orchards and heirloom seed preservation providing 80% of dining produce.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-background border border-border space-y-2">
              <Award className="w-5 h-5 text-primary" />
              <h4 className="font-serif text-lg text-foreground">LEED Platinum</h4>
              <p className="text-[11px] text-muted-foreground">
                Ranked in top 1% globally for sustainable luxury hospitality architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CURATORS & LEADERSHIP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="The Custodians"
            title="The minds behind"
            italicWord="the retreat."
          />
          <p className="text-xs sm:text-sm text-muted-foreground font-light max-w-md md:text-right">
            Meet the visionaries, architectural masters, and culinary artists who curate every sensory detail of your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curators.map((curator, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-card border border-border space-y-5"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-background">
                <img
                  src={curator.image}
                  alt={curator.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif text-xl text-card-foreground">{curator.name}</h4>
                <p className="text-[11px] uppercase tracking-wider text-primary font-medium">
                  {curator.role}
                </p>
                <p className="text-xs text-muted-foreground font-light leading-relaxed pt-2">
                  {curator.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <CTASection onOpenBooking={onOpenBooking} />
    </div>
  );
};
