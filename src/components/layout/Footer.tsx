import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HOTEL_CONTACT } from '../../data';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-background text-foreground pt-20 pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-border">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <NavLink to="/" className="inline-block">
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground tracking-tight">
                Nivara Hotels
              </h3>
            </NavLink>
            <p className="text-sm font-light text-muted-foreground max-w-sm leading-relaxed">
              Refined stays, thoughtfully designed. Boutique hospitality rooted in quiet comfort and memorable experiences.
            </p>
            <div className="pt-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold">
                Hotel Location
              </p>
              <p className="text-xs text-muted-foreground/80 mt-1">
                {HOTEL_CONTACT.address}
              </p>
              <p className="text-xs text-muted-foreground/80 mt-1">
                Direct: {HOTEL_CONTACT.phone} · {HOTEL_CONTACT.email}
              </p>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <NavLink to="/" className="hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-primary transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/rooms" className="hover:text-primary transition-colors">
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Stay Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Stay
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <NavLink to="/rooms" className="hover:text-primary transition-colors">
                  Rooms & Suites
                </NavLink>
              </li>
              <li>
                <NavLink to="/rooms" className="hover:text-primary transition-colors">
                  Residences
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-primary transition-colors">
                  Amenities
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-primary transition-colors">
                  Reservations
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Hotel Notes & Dispatches
            </h4>
            <p className="text-xs font-light text-muted-foreground leading-relaxed">
              Receive occasional notes from Nivara, seasonal suite openings, and quiet travel inspirations.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-primary bg-card p-3 rounded-xl border border-primary/30">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you. You are now subscribed to Nivara notes.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="rounded-full py-5 pl-4 pr-28 text-xs bg-card"
                />
                <Button
                  type="submit"
                  variant="luxury"
                  size="luxurySm"
                  className="absolute right-1"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground/70 font-light">
          <p>© 2026 Nivara Hotels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <NavLink to="/about" className="hover:text-primary transition-colors">
              Privacy
            </NavLink>
            <NavLink to="/about" className="hover:text-primary transition-colors">
              Terms
            </NavLink>
            <NavLink to="/contact" className="hover:text-primary transition-colors">
              Concierge Desk
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
