import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { ContactPage } from './pages/ContactPage';
import { Room } from './types';
import { BookingSearchDetails } from './components/BookingBar';

// Component to reset scroll position on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);
  const [bookingDetails, setBookingDetails] = useState<BookingSearchDetails | undefined>(undefined);

  const handleOpenBooking = (room?: Room, details?: BookingSearchDetails) => {
    setSelectedRoom(room);
    if (details) {
      setBookingDetails(details);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoom(undefined);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {/* Top Floating Glass Navigation */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={() => handleOpenBooking()} />} />
            <Route path="/rooms" element={<RoomsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Editorial Luxury Footer */}
        <Footer />

        {/* Global Interactive Booking & Suite Reservation Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialRoom={selectedRoom}
          initialRoomId={bookingDetails?.roomId || selectedRoom?.id}
          initialCheckIn={bookingDetails?.checkIn}
          initialCheckOut={bookingDetails?.checkOut}
          initialGuests={bookingDetails?.guests}
        />
      </div>
    </Router>
  );
}

export default App;
