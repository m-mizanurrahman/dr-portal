import React from 'react';
import chair from '../../../images/Mask Group 3.png'


const FeaturedService = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4">
                <img style={{height: '400px', marginLeft:'200px'}} src={chair} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Exceptional Dental <br/> Care, on Your Terms</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eius nobis, natus labore ipsum maxime?</p>
                <button className="btn btn-primary">Learn More</button>

            </div>
            

        </main>
    );
};

export default FeaturedService;