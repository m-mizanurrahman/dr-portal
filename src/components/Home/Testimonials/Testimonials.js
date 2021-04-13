import React from 'react';
import fluoride from '../../../images/Ellipse 1.png'
import whitening from '../../../images/Ellipse 2.png'
import cavity from '../../../images/Ellipse 3.png'
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';

const serviceData = [
    {
        name: 'Winston Herry',
        img: fluoride
    },
    {
        name: 'Winston Herry',
        img: cavity
    },
    {
        name: 'Winston Herry',
        img: whitening
    }
]

const Testimonials = () => {
    return (
        <section style={{margin: '150px'}}>
            <h4 className="text-brand">TESTIMONIAL</h4>
            <h1>What's Our Patients <br/> Says</h1>
            <div className="d-flex justify-content-center">
                <div  className="w-95 row mt-5 pt-0">
                    {
                        serviceData.map(service => <TestimonialDetail service={service}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;