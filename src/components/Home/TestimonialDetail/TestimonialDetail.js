import React from 'react';

const TestimonialDetail = ({ service }) => {
    return (
        <div style={{border: '1px solid gray', margin: '15px', borderRadius: '1px', borderBlockStart: '10px', boxShadow: '2px 2px gray'}} className="col-md-3 text-justify">
            <div>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam.</p>
            </div>
            <div className="d-flex mt-5 mb-5">
                <div>
                    <img style={{ height: '50px'}} src={service.img} alt="" />
                </div>
                <div style={{marginLeft: '10px'}}>
                    <h6 className="text-brand">{service.name} </h6>
                    <small>California</small>
                </div>
            </div>

        </div>
    );
};

export default TestimonialDetail;