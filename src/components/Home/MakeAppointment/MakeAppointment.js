import React from 'react';
import chair from '../../../images/5790-removebg.png'
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment"  >
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={chair} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5 ">
                        <h5 className="text-primary text-uppercase ">APPOINTMENT</h5>
                        <h1 className="my-4">Make an appointment<br />Today</h1>
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eius nobis, natus labore ipsum maxime?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;