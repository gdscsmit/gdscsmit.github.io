import React, { useState } from 'react'
import { db } from '../firebaseConfig.js'
import { addDoc,collection } from 'firebase/firestore'
import Navbar from './Navbar'
import Footer from './Footer'

const [name,setName]=useState();
const [email,setEmail]=useState();
const [message,setMessage]=useState();

const userCollectionRef = collection(db,"contactData");

const handleSubmit = async() =>{
    addDoc(userCollectionRef, {
        name: name,
        email: email,
        message : message
    }).then(()=>{
        if(!alert("Form Submitted Succesfully"))document.location= "src/Components/Home.jsx"
    })
}


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
                    <input type="text" id="form4Example1" className="form-control"   onChange={(event) => {
                        setName(event.target.value)
                    }} />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example2">Email address</label>
                    <input type="email" id="form4Example2" className="form-control"   onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form4Example3">Message</label>
                    <textarea className="form-control" id="form4Example3" rows="4"  onChange={(event) => {
                        setMessage(event.target.value)
                    }} ></textarea>
                </div>

                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary mb-4" onClick={handleSubmit}>Send</button>
                </div >
            </form>

            <Footer />
        </>
    )
}
