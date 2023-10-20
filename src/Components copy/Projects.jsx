import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import styled from 'styled-components';

const BoxComponent=styled(Box)`
border: 1px solid black;
border-radius: 200px;
  
`
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Seminar",
      image:
        "https://medschool.vanderbilt.edu/wp-content/uploads/sites/35/public_files/13314405705_fa3a6e6850_k.jpg",
      description: "Exploring Emerging Tech Trends Together.",
      classes: "bg-red rounded",
    },
    {
      id: 2,
      title: "Projects",
      image:
        "https://www.thebvnewspaper.com/wp-content/uploads/2021/04/Group-Projects.jpg",
      description: "Building Solutions, Empowering Communities.",
      classes: "bg-green rounded",
    },
    {
      id: 3,
      title: "Workshop",
      image:
        "https://studio180theatre.com/wp-content/uploads/2023/08/Studio-180-Education-Workshop-68-1-1200x801.jpg",
      description: "Hands-On Learning for Tech Enthusiasts",
      classes: "bg-yellow rounded",
    },
  ];

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      p={4} // Add padding as needed
    >
      {projects.map(({ id, title, description, classes, image }) => (
        <Box
          key={id}
          
          maxWidth="300px" // Set a maximum width as needed
          m={2} // Add margin as needed
        >
          <BoxComponent className="vision-card">
            <div className="mt-4 mx-4 d-flex flex-column">
              <img
                className="w-100 rounded"
                src={image}
                style={{ height: "155px" }}
              />
              <span
                className={`vision-card-title fw-bold cursor-pointer text-white rounded p-2 w-75 my-4 px-3 ${classes} mx-auto`}
              >
                {title}
              </span>
            </div>
            <p className="w-75 mx-auto mb-2">{description}</p>
          </BoxComponent>
        </Box>
      ))}
    </Box>
  );
};
export default Projects;
