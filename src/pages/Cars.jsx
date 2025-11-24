import React, { useMemo, useState } from 'react';

// Cars page renders a grid of car cards with a simple search filter and two modals:
// - Booking modal: a client-only form that shows a success message
// - Car Info modal: shows details for a selected car
// All images reference files under public/assets/images.
const CAR_DATA = [
  {
    id: 'bmw-2023',
    model: 'Bmw 2023',
    image: '/assets/images/car5.jpg',
    description:
      'The BMW 2023 Serie 7 is a luxury sedan with an 8-cylinder twin-turbo engine, premium leather seats, and cutting-edge technology. It delivers exceptional comfort, performance, and prestige.',
    sales: 'Contact sales for current pricing and availability.',
  },
  {
    id: 'honda-2020',
    model: 'Honda 2020',
    image: '/assets/images/car2.jpg',
    description:
      'The Honda 2020 is known for its reliability and fuel efficiency. It comes with a comfortable cabin, modern infotainment system, and low maintenance costs, great for families and commuters.',
    sales: 'Great financing options available for qualified buyers.',
  },
  {
    id: 'ford-2022',
    model: 'Ford 2022',
    image: '/assets/images/car3.jpg',
    description:
      'The Ford 2022 offers a powerful twin-turbo engine, sporty design, and advanced driver assistance features. Ideal for both city driving and long journeys.',
    sales: 'Ask about current promos and test drive scheduling.',
  },
  {
    id: 'hyundai-2022',
    model: 'Hyundai 2022',
    image: '/assets/images/car4.jpg',
    description:
      'The Hyundai 2022 features a modern design, advanced safety technology, and a fuel-efficient engine. Comfortable interior and user-friendly infotainment.',
    sales: 'Warranty and maintenance packages available.',
  },
  {
    id: 'rover-2025',
    model: 'Rover 2025',
    image: '/assets/images/rover2025.jpg',
    description:
      'The Rover 2025 combines rugged off-road capability with modern luxury. Robust AWD, spacious interior, and advanced tech.',
    sales: 'Limited availability — reserve yours today.',
  },
  {
    id: 'toyota-2024',
    model: 'Toyota 2024 X5',
    image: '/assets/images/car1.jpg',
    description:
      'The Toyota 2024 X5 offers a reliable 6-cylinder engine, advanced safety features, and a comfortable ride — perfect for families.',
    sales: 'Factory incentives may apply this month.',
  },
];

function Cars() {
  // Search query for filtering models by name
  const [query, setQuery] = useState('');
  // Modal visibility flags
  const [bookingOpen, setBookingOpen] = useState(false);
  const [carInfoOpen, setCarInfoOpen] = useState(false);
  // Selected car for modals
  const [selectedCar, setSelectedCar] = useState(null);
  // Controlled inputs for the booking form
  const [bookingForm, setBookingForm] = useState({ name: '', car: '', date: '' });
  // Simple success indicator after client-side submit
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Derived list filtered by query (case-insensitive)
  const filtered = useMemo(
    () => CAR_DATA.filter((c) => c.model.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  // Open booking modal and initialize form with selected model
  const openBooking = (car) => {
    setSelectedCar(car);
    setBookingForm({ name: '', car: car.model, date: '' });
    setBookingSuccess(false);
    setBookingOpen(true);
  };

  // Client-only submit: prevent full page reload and show success message
  const submitBooking = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  // Open info modal for the chosen car
  const openInfo = (car) => {
    setSelectedCar(car);
    setCarInfoOpen(true);
  };

  return (
    <div className="cars-page">
      <div className="container">
<br/>
<br/>
<br/>
<br/>

        {/* Cards container */}
        <div className="cars">
          {filtered.map((car) => (
            <div className="car" key={car.id}>
              <img src={car.image} alt={car.model} />
              <h1 className="car-model">{car.model}</h1>
              <p>{car.description}</p>
              <div className="hr"></div>
              <div className="sales">
                <p>
                  <a
                    href="#"
                    className="more-info-link"
                    onClick={(e) => {
                      e.preventDefault();
                      openInfo(car);
                    }}
                  >
                    More Info
                  </a>
                </p>
              </div>
              <button className="booking-btn" onClick={() => openBooking(car)}>
                booking
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking modal */}
      {bookingOpen && (
        <div id="bookingModal" className="cars-modal" role="dialog" aria-modal="true">
          <div className="cars-modal-content">
            <button
              className="cars-modal-close"
              aria-label="Close"
              onClick={() => setBookingOpen(false)}
            >
              &times;
            </button>
            <h2>Book Your Car</h2>
            <form id="bookingForm" onSubmit={submitBooking}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={bookingForm.name}
                onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
              />
              <label htmlFor="car">Car Model</label>
              <input
                type="text"
                id="car"
                name="car"
                required
                value={bookingForm.car}
                onChange={(e) => setBookingForm({ ...bookingForm, car: e.target.value })}
              />
              <label htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={bookingForm.date}
                onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
              />
              <button type="submit">Book Now</button>
            </form>
            {bookingSuccess && (
              <div id="bookingSuccess" className="cars-booking-success">
                Thank you! Your booking has been received.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Car info modal */}
      {carInfoOpen && selectedCar && (
        <div id="carInfoModal" className="cars-modal" role="dialog" aria-modal="true">
          <div className="cars-modal-content">
            <button
              className="cars-modal-close"
              aria-label="Close"
              onClick={() => setCarInfoOpen(false)}
            >
              &times;
            </button>
            <h2 id="carInfoTitle">{selectedCar.model}</h2>
            <p id="carInfoDesc">{selectedCar.description}</p>
            <div id="carInfoSales" style={{ color: 'var(--international-orange-engineering)', marginBottom: '10px' }}>
              {selectedCar.sales}
            </div>
            <img
              id="carInfoImg"
              src={selectedCar.image}
              alt={selectedCar.model}
              style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cars;

