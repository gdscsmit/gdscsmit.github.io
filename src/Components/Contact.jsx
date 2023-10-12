import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { firestore } from '../firebaseConfig';


export default function Contact() {
    
    const [name,setName]=useState([]);
    const [email,setEmail]=useState([]);
    const [message,setMessage]=useState([]);


const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(name,email,message);

    firestore.collection("messages").add({
        name,
        email,
        message,
    }).then(() =>{
        setName(""),
        setEmail(""),
        setMessage("");
    }).catch((error) => console.error('error submitting data :' ,error));

};
    return (
        <>
            <Navbar />
            <div className="col-md-4 my-4 mx-auto contact_logo">
                <img src="./img/gdsc_form.svg" className="img-fluid" alt="..." />
            </div>

            <form className='my-5 w-50 mx-auto' onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example1">Name</label>
                    <input type="text" id="form4Example1" className="form-control" value={name}  onChange={(event) => {
                        setName(event.target.value)
                    }} />
                </div>

                <div className="form-outline mb-4 ">
                    <label className="form-label" htmlFor="form4Example2">Email address</label>
                    <input type="email" id="form4Example2" className="form-control" value={email}  onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example3">Message</label>
                    <textarea className="form-control" id="form4Example3" rows="4"  value={message} onChange={(event) => {
                        setMessage(event.target.value)
                    }} ></textarea>
                </div>

                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary mb-4" >Send</button>
                </div >
            </form>

            <Footer />
        </>
    )
}