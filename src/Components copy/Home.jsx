import React, { useEffect } from "react";
import Footer from "./Footer";
import Vision from "./Vision";
import ScrollToTopButton from "./gototop";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container divone">
        <div className="display-5 fw-bold mt-4">Welcome to GDSC SMIT </div>
        <div className="row">
          <div className="col-md-8">
            <div className="my-5">
              <div className="text-lg text-sm">
                Google Developer Student Clubs are groups of students from
                diverse undergraduate or graduate programs with an interest in
                growing as a developer. As GDSC&apos;s chapter at Sikkim Manipal
                Institute of Technology, we aim to help students connect with
                like-minded developers, facilitate knowledge across several
                domains, from industry leaders to students and build solutions
                that will be the change we hope for.
              </div>
            </div>
            <div className="butone">
              <a href="https://gdsc.community.dev/accounts/login/?next=/sikkim-manipal-institute-of-technology-gangtok/">
                <button type="button" id="becameButton" className="btn btn-primary mx-3">
                  Become Member
                </button>
              </a>
              <a href="https://developers.google.com/community/gdsc#:~:text=Google%20Developer%20Student%20Clubs%20(GDSC,as%20a%20developer%20are%20welcome.">
                <button type="button" id="learnButton" className="btn btn-outline-dark">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <img src="./img/gsc.png" className="img-fluid" alt="..." />
          </div>
        </div>
      </div>

      <div className="d-flex container overflow-hidden text-center ">
        <div className="gy-5 rounded-4 d-flex flex-md-row flex-column text-center my-5 justify-content-center align-items-center">
          <div className="my-3 mx-3">
            <div className="p-3 rounded-4 border bg-light">
              <h3><b>Why GDSC?</b></h3> 
              <br />
              By joining GDSC at SMIT, you gain access to numerous workshops,
              information sessions, and student-community collaborative projects
            </div>
          </div>

          <div className="my-3 rounded-4 mx-3">
            <div className="p-3 rounded-4 border bg-light">
              <h3><b>Concept of GDSC</b></h3> 
              <br />
              The purpose of GDSC is to inspire and empower students through
              understanding technology and reflecting on it's impact
            </div>
          </div>
        </div>
      </div>

      <Vision />

      <div
      data-aos="fade-up"
      className="bg embed-responsive-16by9 text-center my-5" id="Video">
        <div className="container-fluid rounded-4 overflow-hidden shadow-lg " id="video">
          <iframe 
            className="rounded-4 embed-responsive-item yt_video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/earTjC0iSjg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div id="endcontain" className="container-fluid text-center my-4">
        <strong>
          <font size="7">
            <font color="#4285F4" data-aos="fade-up">
              Connect.{" "}
            </font>
            <font color="#EA4335" data-aos="fade-up" data-aos-duration="3000">
              Learn.{" "}
            </font>
            <font color="#34A853" data-aos="fade-up" data-aos-duration="3000">
              Grow.{" "}
            </font>
          </font>
        </strong>
      </div>
      <hr style={{margin:"0px",padding:"0px"}} ></hr>
      <Footer />
      <ScrollToTopButton />              
    </>
  );
}
