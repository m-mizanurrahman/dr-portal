import React from 'react';

const Contact = () => {
    return (
        <div style={{ margin: '100px', backgroundColor: 'gray' }}
            className="text-center p-5">
            <div  className="m-5 mb-5 mt-5">
                <h4 className="text-brand">CONTACT US</h4>
                <h1>Always Connect with us</h1>
                <form className="p-5">
                    <div class="form-group">
                        <label for="exampleFormControlInput1"></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address*" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1"></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject*" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Your message*" rows="3"></textarea>
                    </div><br/>
                    <button className="bg-primary" type="submit">Submit</button>
                </form>
            </div>
        </div >
    );
};

export default Contact;