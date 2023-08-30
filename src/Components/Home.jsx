import React from 'react'
import Footer from './Footer'

export default function Home() {
    return (
        <>
            <div className="container divone">
                <div className="row">
                    <div className="col-md-8">
                        <div className="txtone my-5">
                            <h4>
                                Google Developer Student Clubs are groups of students from diverse undergraduate or graduate programs with an interest
                                in growing as a developer.
                                As GDSC's chapter at Sikkim Manipal Institute of Technology, we aim to help students connect with like-minded developers, facilitate knowledge across several domains, from industry leaders to students and build solutions that will be the change we hope for.
                            </h4>
                        </div>
                        <div className="butone">
                            <a href="https://gdsc.community.dev/accounts/login/?next=/sikkim-manipal-institute-of-technology-gangtok/"><button type="button" className="btn btn-primary btn-lg mx-3">Become Member</button></a>
                            <a href="https://developers.google.com/community/gdsc#:~:text=Google%20Developer%20Student%20Clubs%20(GDSC,as%20a%20developer%20are%20welcome."><button type="button" className="btn btn-outline-dark btn-lg" >Learn More</button></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="./img/img2.svg" className="img-fluid" alt="..." />
                    </div>
                </div>
            </div>


            <div className="container overflow-hidden text-center my-4">
                <div className="row gy-5">
                    <div className="col-6">
                        <div className="p-3 border bg-light"><b>Why GDSC?</b>
                            By joining DSC at SMIT, you gain access to numerous workshops, information sessions, and student-community collaborative projects</div>
                    </div>

                    <div className="col-6">
                        <div className="p-3 border bg-light">
                            <b>Concept of GDSC</b>
                            The purpose of GDSC is to inspire and empower students through understanding technology and reflecting on it's impact</div>
                    </div>

                </div>
            </div>


            <div className="bg embed-responsive-16by9 text-center my-4" id="Video">

                <div className="container-fluid overflow-hidden ">
                    <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/earTjC0iSjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>

            <div id="endcontain" className="container-fluid text-center my-4">

                <strong>
                    <font size="7">
                        <font color="#4285F4">Connect. </font>
                        <font color="#EA4335">Learn. </font>
                        <font color="#34A853"> Grow. </font>
                    </font>
                </strong>
            </div>

            <Footer/>
        </>
    )
}
