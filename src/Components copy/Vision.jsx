import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Vision = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const visions = [
    {
      id: 1,
      title: "Seminar",
      image: "https://medschool.vanderbilt.edu/wp-content/uploads/sites/35/public_files/13314405705_fa3a6e6850_k.jpg",
      description: "Exploring Emerging Tech Trends Together.",
      classes: "bg-red rounded",
    },
    {
      id: 2,
      title: "Projects",
      image: "https://www.thebvnewspaper.com/wp-content/uploads/2021/04/Group-Projects.jpg",
      description: "Building Solutions, Empowering Communities.",
      classes: "bg-green rounded",
    },
    {
      id: 3,
      title: "Workshop",
      image: "https://studio180theatre.com/wp-content/uploads/2023/08/Studio-180-Education-Workshop-68-1-1200x801.jpg",
      description: "Hands-On Learning for Tech Enthusiasts",
      classes: "bg-yellow rounded",
    },
    {
      id: 4,
      title: "Hackathons",
      image: "https://www.coresponsibility.com/wp-content/uploads/2016/03/cr-students-hack.jpg",
      description: "Innovate, Collaborate, Create, Win!",
      classes: "bg-blue rounded",
    },
  ];

  return (
    <>
      <div className="my-5 w-75 mx-auto">
        <div className="d-flex flex-column justify-center">
          <h1 className="vision text-center display-5 font-bold">Vision</h1>
          <p className="text-2xl text-center max-w-lg md:max-w-2xl">
            GDSC SMIT is inspired by the Google Developer&apos;s Family
          </p>
          <p className="text-2xl text-center max-w-lg md:max-w-2xl">
            Our goal is to learn, explore, innovate and create <br /> And also,
            having fun!
          </p>
        </div>
        
        <div className="d-flex flex-md-row flex-column text-center vh-25">
          {visions.map(({ id, title, description, classes, image }) => (
            id === 2 ? ( // Check if it's the "Projects" section
              <Link to="/projects"   style={{color:"gray",textDecoration:"none"}}  key={id} className="vision_card rounded my-2 mx-2 w-100 border border-light-subtle " data-aos="fade-up" data-aos-duration='1000'>
                <div className="mt-4 mx-4 d-flex flex-column">
                  <img className='w-100 rounded' src={image} style={{ height: "155px" }} />
                  <span className={`vision_card__title fw-bold cursor-pointer text-white rounded p-2 w-75 my-4 px-3 ${classes} mx-auto`}>
                    {title}
                  </span>
                </div>
                <p className="w-75 mx-auto mb-2 ">{description}</p>
              </Link>
            ) : (
              // For other sections, use regular divs
              <div key={id} className="vision_card rounded my-2 mx-2 w-100 border border-light-subtle " data-aos="fade-up" data-aos-duration='1000'>
                <div className="mt-4 mx-4 d-flex flex-column">
                  <img className='w-100 rounded' src={image} style={{ height: "155px" }} />
                  <span className={`vision_card__title fw-bold cursor-pointer text-white rounded p-2 w-75 my-4 px-3 ${classes} mx-auto`}>
                    {title}
                  </span>
                </div>
                <p className="w-75 mx-auto mb-2 ">{description}</p>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Vision;
