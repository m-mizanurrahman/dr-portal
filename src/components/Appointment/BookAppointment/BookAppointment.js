import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
const bookingDate = [
    {
        _id: '5e8df',
        id:1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8dfq',
        id:2,
        subject: 'Teeth bleeding',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },{
        _id: '5e8dfw',
        id:3,
        subject: 'Teeth cavity',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },{
        _id: '5e8dfe',
        id:4,
        subject: 'Teeth broken',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8dfr',
        id:5,
        subject: 'Teeth canal',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '5e8dft',
        id:6,
        subject: 'Teeth problem',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand">Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingDate.map(booking => <BookingCard booking={booking} date={date} key ={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;