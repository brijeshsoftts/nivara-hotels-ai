import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Send } from 'lucide-react';
import { HOTEL_CONTACT } from '../data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Hotel Room Reservation',
    arrivalDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-28 pb-20">
      {/* 1. HERO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center pt-8 sm:pt-14 pb-16">
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Contact Nivara Hotels
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-[1.12]">
            We would love to <br />
            <span className="italic font-normal text-primary">hear from you.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Whether you have questions regarding room availability, special dietary preferences, arrival schedules, or private arrangements in Jaipur, our reservations team is ready to assist.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & INTERACTIVE FORM */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info & Transit */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.24em] text-primary font-semibold block">
                Direct Inquiries
              </span>
              <h2 className="font-serif text-3xl text-foreground">
                Hotel Reservations & Concierge
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-card border border-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base text-card-foreground">Telephone</h3>
                </div>
                <p className="text-xs text-muted-foreground font-light">
                  Direct reservations line and concierge desk:
                </p>
                <p className="font-serif text-lg text-primary font-medium">
                  {HOTEL_CONTACT.phone}
                </p>
                <p className="text-[10px] text-muted-foreground/70">Available 24 hours, 7 days a week</p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base text-card-foreground">Email</h3>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reservations:</span>
                    <span className="text-foreground font-medium">{HOTEL_CONTACT.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Concierge Desk:</span>
                    <span className="text-foreground font-medium">{HOTEL_CONTACT.conciergeEmail}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-background border border-border flex items-center justify-center text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base text-card-foreground">Location</h3>
                </div>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  {HOTEL_CONTACT.address}
                </p>
                <p className="text-[10px] text-primary">
                  Jaipur International Airport (JAI) · 35 minutes via private transfer
                </p>
              </div>
            </div>

            {/* Arrival & Transit */}
            <div className="p-6 rounded-3xl bg-card border border-primary/20 space-y-3">
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-semibold block">
                Arrival Options
              </span>
              <h4 className="font-serif text-lg text-card-foreground">Airport Chauffeur Service</h4>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                Chauffeur transfers in air-conditioned luxury sedans can be coordinated directly with our concierge desk prior to your arrival at Jaipur International Airport or Jaipur Junction Railway Station.
              </p>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border shadow-2xl relative">
              <div className="mb-8 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.24em] text-primary font-semibold block">
                  Message Us
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-card-foreground">
                  Send a Message
                </h3>
                <p className="text-xs text-muted-foreground font-light">
                  Our reservations team will respond within 4 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4 rounded-2xl bg-background border border-primary/30">
                  <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary flex items-center justify-center text-primary mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-2xl text-foreground">
                    Message Received
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'valued guest'}. Your inquiry regarding{' '}
                    <span className="text-primary font-medium">{formData.inquiryType}</span> has been received. Our concierge team is reviewing your message and will reply to{' '}
                    <span className="text-primary">{formData.email || 'your email'}</span> promptly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Hotel Room Reservation',
                        arrivalDate: '',
                        message: '',
                      });
                    }}
                    className="mt-4 rounded-full text-xs font-semibold uppercase tracking-[0.16em]"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Full Name *
                      </Label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Vance"
                        className="bg-background text-xs py-3 h-auto"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="patron@sanctuary.com"
                        className="bg-background text-xs py-3 h-auto"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="bg-background text-xs py-3 h-auto"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        Inquiry Topic
                      </Label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-background border border-input rounded-md px-4 py-3 text-xs text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer"
                      >
                        <option value="Hotel Room Reservation" className="bg-card text-foreground">Hotel Room Reservation</option>
                        <option value="Special Requests & Dietary" className="bg-card text-foreground">Special Requests & Dietary</option>
                        <option value="Airport Transfer Request" className="bg-card text-foreground">Airport Transfer Request</option>
                        <option value="Extended Stay / Multiple Rooms" className="bg-card text-foreground">Extended Stay / Multiple Rooms</option>
                        <option value="General Hotel Inquiries" className="bg-card text-foreground">General Hotel Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Planned Dates of Stay (Optional)
                    </Label>
                    <Input
                      type="text"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      placeholder="e.g. October 15 - 19, 2026 (2 guests)"
                      className="bg-background text-xs py-3 h-auto"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      Message & Special Requests *
                    </Label>
                    <Textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your room preference, arrival details, or any special arrangements needed for your stay..."
                      className="bg-background text-xs py-3 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="luxuryLg"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISUAL ARCH SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-border bg-background">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
            alt="Nivara Hotels Courtyard at twilight"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-baseline justify-between">
            <div>
              <p className="font-serif text-2xl text-foreground">Nivara Courtyard at Twilight</p>
              <p className="text-xs text-muted-foreground">Amber Ridge Foothills, Jaipur · Valet check-in and private cloister</p>
            </div>
            <p className="text-[11px] uppercase tracking-widest text-primary mt-2 sm:mt-0 font-medium">
              We look forward to hosting you
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
