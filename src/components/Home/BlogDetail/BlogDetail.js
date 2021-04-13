import React from 'react';

const BlogDetail = ({ service }) => {
    return (
        <div className="col-md-5 text-justify">
            <div className="d-flex mt-5 mb-5 ">
                <div>
                    <img style={{ height: '50px' }} src={service.img} alt="" />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    <h6 className="text-brand">{service.name} </h6>
                    <small>23 April 2021</small>
                </div>
            </div>
            <div>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam.</p>
            </div>

        </div>
    );
};

export default BlogDetail;