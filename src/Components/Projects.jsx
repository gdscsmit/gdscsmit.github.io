import React, { useEffect } from 'react';
import AOS from 'aos';
import Box from '@mui/material/Box';
import { Link, redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      id: 1,
      TechStack: 'TechStack : Dart',
      image:
        'https://user-images.githubusercontent.com/109246240/274279691-fe48bc16-3ae6-4f6b-9fac-a0b8fc13acee.png',
      description:
        'This repository houses the codebase for the mobile application that represents our community and showcases our events, projects, and resources.',
      classes: 'bg-red rounded',
      Redirect: 'https://github.com/gdscsmit/GDSC-SMIT-App',
    },
    {
      id: 2,
      TechStack: 'TechStack : Python',
      image:
        'https://user-images.githubusercontent.com/34091879/274677601-ae6fa298-eb46-48f4-a39a-f886b9c828c8.gif',
      description:
        'Welcome to fsociety, an all-in-one ethical hacking toolkit. This toolkit is designed to provide a comprehensive suite of tools for ethical hackers, security researchers, and cybersecurity enthusiasts.',
      classes: 'bg-green rounded',
      Redirect: 'https://github.com/gdscsmit/fsociety',
    },
    {
      id: 3,
      TechStack: 'TechStack : JavaScript',
      image:
        'https://user-images.githubusercontent.com/109246240/274279691-fe48bc16-3ae6-4f6b-9fac-a0b8fc13acee.png',
      description:
        'This repository houses the codebase for the website that represents our community and showcases our events, projects, and resources. ',
      classes: 'bg-yellow rounded',
      Redirect: 'https://github.com/gdscsmit/gdscsmit.github.io',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="my-5 w-75 mx-auto">
        <div className="d-flex flex-column justify-center">
          <h1 className="text-center display-5 fw-bold font-italic gap-3">
            <font className="mx-2" color="#4285F4">
              Our
            </font>
            <font className="mx-2" color="#EA4335">
              Projects
            </font>
            <font className="mx-2" color="F4B400">
              of
            </font>
            <font className="mx-2" color="#34A853">
              2023{' '}
            </font>
          </h1>
          <p className="text-2xl text-center max-w-lg md:max-w-2xl">
            Meet the Driving Force Behind Innovation
          </p>
          <p className="text-2xl text-center max-w-lg md:max-w-2xl">
            Learning and innovation are at the core of everything we do. With
            our extraordinary team, we are dedicated to solving everyday
            challenges and pushing the boundaries of technology. Together, we
            are making it happen!
          </p>
        </div>
      </div>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        // height={'100vh'}
        p={4} // Add padding as needed
      >
        {projects.map(
          ({ id, TechStack, description, classes, Redirect, image }) => (
            <Box
              key={id}
              className="vision_card rounded my-2 mx-2 w-100 border border-light-subtle "
              data-aos="fade-up"
              data-aos-duration="1000"
              maxWidth="300px" // Set a maximum width as needed
              style={{ height: '450px' }}
              m={2} // Add margin as needed
            >
              <Link
                to={Redirect}
                style={{ color: 'black', textDecoration: 'none' }}
              >
                <div className="mt-4 mx-4 d-flex flex-column">
                  <img
                    className="w-100 rounded"
                    src={image}
                    style={{ height: '120px' }}
                  />
                  <span
                    className={`vision-card-title fw-bold cursor-pointer text-white rounded p-2 w-85 my-4 px-3 ${classes} mx-auto`}
                  >
                    {TechStack}
                  </span>
                </div>
                <p className="w-75 mx-auto mb-2">{description}</p>
              </Link>
            </Box>
          )
        )}
      </Box>
      <hr style={{ margin: '0px', padding: '0px' }}></hr>
      <Footer />
    </>
  );
};
export default Projects;
