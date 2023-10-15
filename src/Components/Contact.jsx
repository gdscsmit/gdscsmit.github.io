import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { database } from "../firebaseConfig";
import { Loader } from "./Loader";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    // Submit data to firebase
    database
      .ref("Responses")
      .push({
        name: name,
        email: email,
        message: message,
      })
      .catch((error) => console.error("error submitting data :", error));

    // Alert when form is submitted
    alert("Sent Successfully!");
  };

  // Set loading to false after 1 second
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        // If loading is true, render the loader
        <Loader />
      ) : (
        // If loading is false, render the app
        <>
          {/* Navbar */}
          <Navbar />

          {/* Main */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* Logo */}
            <div className="col-md-4 mb-5 mt-4 contact_logo">
              <img src="./img/gdsc_form.svg" className="img-fluid" alt="..." />
            </div>

            {/* Contact card */}
            <div
              className="row card shadow d-flex align-items-center flex-row p-5 mb-3"
              style={{ width: "80%", height: "auto" }}
            >
              {/* Right */}
              <div className="col-md-6 p-5">
                <img
                  className="img-fluid"
                  src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1697360648~exp=1697361248~hmac=c1048c6b6eabd19c22ce4b952e7408ee9bed89a1ee6505893c371e26c3849053"
                  alt=""
                />
              </div>
              {/* Left */}
              <div className="col-md-6 col-sm-12 card p-4">
                {/* Heading */}
                <p className="align-self-center h3 fw-bold text-primary mb-4">
                  Contact Us
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Name field */}
                  <div className="form-outline input-group mb-4 ">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-user text-primary"></i>
                    </span>
                    <input
                      type="text"
                      id="form4Example1"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>

                  {/* Email field */}
                  <div className="form-outline input-group mb-4 ">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fa-solid fa-envelope text-primary"></i>
                    </span>
                    <input
                      type="email"
                      id="form4Example2"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>

                  {/* Message field */}
                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form4Example3"
                      rows="4"
                      value={message}
                      placeholder="Type your message here..."
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-4"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
