import React from 'react';

const DoctorDetail = ({service}) => {
    return (
        <div style={ {margin: '15px', }} className="col-md-3 text-justify">
           
            <div className=" mt-5 mb-5">
                <div>
                    <img style={{ height: '150px'}} src={service.img} alt="" />
                </div>
                <div style={{marginLeft: '10px'}}>
                    <h6 className="text-brand">{service.name} </h6>
                    <small>+61452400126</small>
                </div>
            </div>

        </div>
    );
};

export default DoctorDetail;