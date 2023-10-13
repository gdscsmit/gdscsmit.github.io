import React from 'react'

const Vision = () => {
    const visions = [
        {
            id: 1,
            title: "Seminar",
            description: "Exploring Emerging Tech Trends Together.",
            classes: "bg-red rounded " ,
        },
        {
            id: 2,
            title: "Projects",
            description: "Building Solutions, Empowering Communities.",
            classes: "bg-green rounded",
        },
        {
            id: 3,
            title: "Workshop",
            description: "Hands-On Learning for Tech Enthusiasts",
            classes: "bg-yellow rounded text-dark",
        },
        {
            id: 4,
            title: "Hackthons",
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

                <div className="d-flex flex-md-row flex-column text-center">
                    {visions.map(({ id, title, description, classes }) => (
                        <div key={id} className="">
                            <div className="my-4 mx-4">
                                <span className={`fw-bold rounded p-2 px-3 ${classes} mx-auto`}>
                                    {title}
                                </span>
                            </div>
                            <p className="w-75 mx-auto">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Vision;