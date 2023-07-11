import './Booking.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = bookings.some(
      (booking) =>
        booking.selectedDate === selectedDate && booking.selectedTime === selectedTime
    );

    if (isDuplicate) {
      alert('Duplicate form submission detected!');
      return;
    }

    const newBooking = {
      selectedDate,
      selectedTime,
    };

    setBookings([...bookings, newBooking]);
    setName('');
    setSelectedDate('');
    setSelectedTime('');
    setNumberOfGuests(1);

    console.log('Form submitted!');
    navigate('/confirmation')
  };

  const selectedDates = bookings.map((booking) => booking.selectedDate);
  const availableDates = selectedDates.length > 0 ? 
    Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i + 1);
      return date.toISOString().split('T')[0];
    }) : [];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="reservdate">Choose date</label>
            <input
              type="date"
              id="reservdate"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              disabled={selectedDate !== ''}
              min={availableDates.length > 0 ? availableDates[0] : ''}
              max={availableDates.length > 0 ? availableDates[availableDates.length - 1] : ''}
            />

            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              disabled={!selectedDate}
            >
              <option value="">Select time</option>
              {selectedDate &&
                ['17:00', '18:00', '19:00', '20:00', '21:00'].map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder=""
              min="1"
              max="10"
              id="guests"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />

            <br />
            <input type="submit" value="Submit" disabled={!selectedDate || !selectedTime} />
          </div>
        </fieldset>
      </form>
    </div>
    );
}

export default Booking;