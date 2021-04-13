import React from 'react';
import fluoride from '../../../images/Ellipse 1.png'
import cavity from '../../../images/Ellipse 3.png'
import BlogDetail from '../BlogDetail/BlogDetail';

const serviceData = [
    {
        name: 'Winston Herry',
        img: fluoride
    },
    {
        name: 'Winston Herry',
        img: cavity
    },

]

const Blogs = () => {
    return (
        <div style={{margin: '150px'}} >
            <h4 className="text-brand text-center ">OUR BLOG</h4>
            <h1 className="text-center ">From Our Blog News</h1>

            <div className="d-flex justify-content-left">
                <div style={{ border: '1px solid gray', margin: '25px', width:'600px', marginLeft: '150px' }} className="w-95 row  mt-5 pt-0 bg-primary">
                    <h4>Rashed Kabir</h4>
                    <p>22 August 2021</p><br /><br />
                    <h3>Check at least a doctor in a <br /> year for your teeth</h3>
                    <br /><br /><br /><br /><br />
                    <h1>--></h1>
                </div>
                <div className="w-95 row mt-5 pt-0">
                    {
                        serviceData.map(service => <BlogDetail service={service}></BlogDetail>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Blogs;