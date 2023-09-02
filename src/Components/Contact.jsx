import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="col-md-4 my-5 mx-auto">
                <img src="./img/gdsc_form.svg" className="img-fluid" alt="..." />
            </div>

            <form className='my-5 w-50 mx-auto'>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example1">Name</label>
                    <input type="text" id="form4Example1" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example2">Email address</label>
                    <input type="email" id="form4Example2" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example3">Message</label>
                    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                </div>

                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary mb-4">Send</button>
                </div >
            </form>

            <Footer />
        </>
    )
}
