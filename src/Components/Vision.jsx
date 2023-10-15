import React from 'react'
 import {motion} from "framer-motion"

const Vision = () => {
    const visions = [
        {
            id: 1,
            title: "Seminar",
            image: "https://medschool.vanderbilt.edu/wp-content/uploads/sites/35/public_files/13314405705_fa3a6e6850_k.jpg", //input the images url here
            description: "Exploring Emerging Tech Trends Together.",
            classes: "bg-red rounded",
        },
        {
            id: 2,
            title: "Projects",
            image: "https://www.thebvnewspaper.com/wp-content/uploads/2021/04/Group-Projects.jpg", //input the images url here
            description: "Building Solutions, Empowering Communities.",
            classes: "bg-green rounded",
        },
        {
            id: 3,
            title: "Workshop",
            image: "https://studio180theatre.com/wp-content/uploads/2023/08/Studio-180-Education-Workshop-68-1-1200x801.jpg", //input the images url here
            description: "Hands-On Learning for Tech Enthusiasts",
            classes: "bg-yellow rounded",
        },
        {
            id: 4,
            title: "Hackathons",
            image: "https://www.coresponsibility.com/wp-content/uploads/2016/03/cr-students-hack.jpg", //input the images url here
            description: "Innovate, Collaborate, Create, Win!",
            classes: "bg-blue rounded",
        }
    ];

    return (
        <>
            <div className="my-5 w-75 mx-auto">
                <div className="d-flex flex-column justify-center">
                    <h1 className="text-center display-5 font-bold">Vision</h1>
                    <p className="text-2xl text-center max-w-lg md:max-w-2xl">
                        GDSC SMIT is inspired by the Google Developer&apos;s Family
                    </p>
                    <p className="text-2xl text-center max-w-lg md:max-w-2xl">
                        Our goal is to learn, explore, innovate and create <br /> And also,
                        having fun!
                    </p>
                </div>

                <div className="d-flex  flex-md-row flex-column text-center vh-100 " style={{padding:"50px"}}>
                    {visions.map(({ id, title, description, classes, image }) => (
                        <motion.div key={id} className="vision_card rounded my-2 mx-2 w-100 border border-light-subtle my-4 mx-4 d-flex flex-column"  
                        whileHover={{scale:1.1,
                            textShadow: "3px 3px 5px gray",
                            boxShadow: "3px 3px 5px gray",
                            borderRadius: '15px'
                    }}
                        
                     style={{marginLeft:"0px",padding:"5px",border:"none"}}
                        >
                             <img className='w-100 rounded' src={image} style={{height: "155px"}}/>
                                <span className={`vision_card__title fw-bold text-white rounded p-2 w-75 my-4 px-3 ${classes} mx-auto`}>
                                    {title}
                                </span>

                            <p className="w-75 mx-auto"   style={{fontSize:"20px" ,fontWeight:"bold"}} >{description}    </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Vision;