import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, User, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { HOTEL_CONTACT } from '../../data';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border py-3.5 shadow-xl shadow-background/50'
          : 'bg-gradient-to-b from-background/80 via-background/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <span className="text-muted-foreground/60 group-hover:text-primary transition-colors text-xs font-serif">
            —
          </span>
          <span className="font-serif text-xl sm:text-2xl tracking-[0.08em] font-normal text-foreground">
            Nivara
          </span>
          <span className="text-muted-foreground/60 group-hover:text-primary transition-colors text-xs font-serif">
            —
          </span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            variant="luxury"
            size="luxurySm"
            onClick={onOpenBooking}
          >
            Book a Stay
          </Button>

          {/* Profile / Concierge quick access */}
          <NavLink
            to="/contact"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            title="Concierge Portal"
          >
            <User className="w-4 h-4" />
          </NavLink>

          {/* Mobile Sheet Menu using shadcn Sheet */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-9 h-9 rounded-full bg-card border-border text-foreground hover:text-primary"
                  aria-label="Toggle Navigation Menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col justify-between p-6 sm:p-8">
                <div className="space-y-8 pt-8">
                  <SheetHeader className="text-left space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-primary">
                      Sanctuary Navigation
                    </span>
                    <SheetTitle className="font-serif text-2xl font-normal text-foreground">
                      Nivara Hotels
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `font-serif text-3xl transition-colors ${
                            isActive ? 'text-primary italic' : 'text-foreground hover:text-primary'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <PhoneCall className="w-3.5 h-3.5 text-primary" />
                    <span>Direct: {HOTEL_CONTACT.phone}</span>
                  </div>
                  <Button
                    variant="luxury"
                    size="luxuryMd"
                    className="w-full"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                  >
                    Reserve Accommodation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
