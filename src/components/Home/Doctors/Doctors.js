import React from 'react';
import fluoride from '../../../images/doctor.png'
import whitening from '../../../images/doctor.png'
import cavity from '../../../images/doctor.png'
import DoctorDetail from '../DoctorDetail/DoctorDetail';

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

const Doctors = () => {
    return (
        <div style={{marginLeft: '150px', marginBottom: '100px', marginTop: '200px'}}>
            <h4 className="text-center mt-5 mb-5 text-brand">Our Doctors</h4>
            <div className="d-flex justify-content-center text-center">
                <div  className="w-100 row mt-5 pt-0">
                    {
                        serviceData.map(service => <DoctorDetail service={service}></DoctorDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;