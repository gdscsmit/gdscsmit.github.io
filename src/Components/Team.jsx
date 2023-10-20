import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fetchFiles } from '../constants/TeamImages';
import { Loader } from "./Loader";

let domainLeadsData = [];
let CoreTeamData = [];
let leadImg = '';

const getRandomColor = () => {
  const colors = ["blue", "red", "yellow", "green"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Card = ({ data }) => {
  const randomBorderColor = getRandomColor();
  const randomBgColor = getRandomColor();

  return (
    <div className="col-xl-3 col-sm-4 my-3">
      <div
        className={`bg-white rounded shadow-sm py-5 px-4 border border-4 border-${randomBorderColor}`}
      >
        <img
          src={data.img}
          alt=""
          width="100"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h5 className="mb-0 fs-4 fw-bold color-dark">{data.name}</h5>
        <span className="small fw-light text-uppercase text-muted">
          {data.domain}
        </span>
        <ul
          className={`social mb-0 list-inline mt-2 mx-auto rounded rounded-5 p-1 bg-${randomBgColor}`}
          style={{ width: "fit-content" }}
        >
          <li className="list-inline-item mx-2 ">
            <a href={data.twitter} className="social-link">
              <i className="fa-brands fa-x-twitter" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href={data.insta} className="social-link">
              <i className="fa fa-instagram" style={{ color: "#fff" }}></i>
            </a>
          </li>
          <li className="list-inline-item mx-2">
            <a href={data.linkedin} className="social-link">
              <i className="fa fa-linkedin" style={{ color: "#fff" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CardList = ({ teamData }) => {
  return (
    <div className="row text-center justify-content-center my-5">
      {teamData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};

export default function Team() {
  const uniqueDomains = [
    ...new Set(CoreTeamData.map((member) => member.domain)),
  ];

  const [activeDomain, setActiveDomain] = useState(uniqueDomains[0]);
  const [loading, setLoading] = useState(true);

  const handleTabClick = (domain) => {
    setActiveDomain(domain);
  };
  function filterTeamMembers(data, domain) {
    let mem = data.filter((member) => member.domain === domain);
    return mem;
  }


  useEffect(() => {
    let isMounted = true;

    const fetchTeamData = async () => {
      try {
        const cachedData = localStorage.getItem('teamDatav1.0.1');

        if (cachedData) {
          const parsedData = JSON.parse(cachedData);

          // Use the cached data
          domainLeadsData = parsedData.domainLeadsData;
          CoreTeamData = parsedData.CoreTeamData;
          leadImg = parsedData.leadImg;
          setLoading(false);
        } else {

          let files = await fetchFiles();
          if (isMounted) {

            domainLeadsData = [
              {
                img: `${files[2].url}`,
                name: "Pooranjoy Bhattacharya",
                domain: "Web Development",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[0].url}`,
                name: "Abhijnyan Das",
                domain: "Cloud Computing",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[25].url}`,
                name: "Madhurjya Dasgupta",
                domain: "Cybersecurity",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[26].url}`,
                name: "Rishav Krishnan",
                domain: "App Development",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[23].url}`,
                name: "Shivam Sourav",
                domain: "AI/ML",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[33].url}`,
                name: "Ahana Sadh",
                domain: "Editorial",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[28].url}`,
                name: "Kuldeep Bora",
                domain: "UI/UX Design",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[36].url}`,
                name: "Namrata Parbat",
                domain: "Event Management",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[5].url}`,
                name: "Dhruv Bhutura",
                domain: "Public Relations",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[20].url}`,
                name: "Toshith Yadav",
                domain: "Web Development CO-LEAD",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[9].url}`,
                name: "Sneha Supriya",
                domain: "AI/ML CO-LEAD",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[10].url}`,
                name: "Manasvi Gupta",
                domain: "Event Management CO LEAD",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[30].url}`,
                name: "Ashmita Sen Roy",
                domain: "Editorial CO LEAD",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[22].url}`,
                name: "Sparsh Ranjan",
                domain: "PR CO LEAD",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
            ];

            CoreTeamData = [
              {
                img: `${files[13].url}`,
                name: "Seedorf Rai",
                domain: "Web Development",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[24].url}`,
                name: "Girish Sharma",
                domain: "Web Development",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[32].url}`,
                name: "Madhurya Hait",
                domain: "Web Development",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[4].url}`,
                name: "Om Gupta",
                domain: "AI/ML",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[1].url}`,
                name: "Mayur K T",
                domain: "AI/ML",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[19].url}`,
                name: "Pratham Srivastava",
                domain: "AI/ML",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[6].url}`,
                name: "Neha Sultan",
                domain: "AI/ML",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[34].url}`,
                name: "Indraneel Das",
                domain: "Cybersecurity",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[29].url}`,
                name: "Shayan Vatsa",
                domain: "Cybersecurity",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[17].url}`,
                name: "Gunjan Chakrabartty",
                domain: "Cybersecurity",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[12].url}`,
                name: "Ishaan S. Oshima",
                domain: "Cybersecurity",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[27].url}`,
                name: "Manaswi Jha",
                domain: "UI/UX Design",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[37].url}`,
                name: "Peela Sharandeep",
                domain: "UI/UX Design",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[31].url}`,
                name: "Priyanjana Paul",
                domain: "UI/UX Design",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[3].url}`,
                name: "Sneha Seal",
                domain: "Cloud Computing",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[15].url}`,
                name: "Deepak Manda",
                domain: "Cloud Computing",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[7].url}`,
                name: "Prantor J. Bharadwaj",
                domain: "Cloud Computing",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[14].url}`,
                name: "Ritusree Das",
                domain: "Editorial",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[8].url}`,
                name: "Andre Antony Andrew",
                domain: "Editorial",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[21].url}`,
                name: "Torsha Guha",
                domain: "Event Management",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[16].url}`,
                name: "Adrija Chakrabarti",
                domain: "Event Management",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[18].url}`,
                name: "Aaryan Pradhan",
                domain: "Event Management",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
              {
                img: `${files[11].url}`,
                name: "Ayush singh",
                domain: "Event Management",
                twitter: "https://john",
                insta: "https://john",
                linkedin: "https://john",
              },
            ];

            leadImg = `${files[35].url}`;

            // Cache the data in local storage
            localStorage.setItem('teamDatav1.0.1', JSON.stringify({
              domainLeadsData,
              CoreTeamData,
              leadImg
            }));

            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
        if (isMounted) {
          setLoading(false); // Set loading to false in case of an error
        }
      }
    };

    fetchTeamData();
  }, []);

  return (
    <>
      {
        loading ? <Loader /> :
          <>
            <Navbar />

            <div id="endcontain" className="container-fluid text-center my-3">
            </div>

            <div className="my-5 w-75 mx-auto">
              <div className="d-flex flex-column justify-center">
                <h1 className="text-center display-5 fw-bold font-italic gap-3">
                  <font className="mx-2" color="#4285F4">Our</font>
                  <font className="mx-2" color="#EA4335">Team</font>
                  <font className="mx-2" color="F4B400">of</font>
                  <font className="mx-2" color="#34A853">2023 </font>
                </h1>
                <p className="text-2xl text-center max-w-lg md:max-w-2xl">
                  Meet the Driving Force Behind Innovation
                </p>
                <p className="text-2xl text-center max-w-lg md:max-w-2xl">
                  Learning and innovation are at the core of everything we do. With our extraordinary team,
                  we are dedicated to solving everyday challenges and pushing the boundaries of technology. Together, we are making it happen!
                </p>
              </div>
            </div>

            <div className="container ">
              <div className="row text-center justify-content-center my-5">
                <strong>
                  <font className="fs-1 text-center display-5">
                    <font color="#000">Lead</font>
                  </font>
                </strong>
                <div className="col-xl-3 col-sm-4 my-3">
                  <div className="bg-white rounded shadow-sm py-5 px-4 border border-4 border-blue">
                    <img
                      src={leadImg}
                      alt=""
                      width="100"
                      className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    />
                    <h5 className="mb-0 fs-4 fw-bold color-dark">Aryan Lohia</h5>
                    <span className="small fw-light text-uppercase text-muted">
                      Lead
                    </span>
                    <ul
                      className="social mb-0 list-inline mt-2 mx-auto rounded rounded-5 p-1 bg-blue"
                      style={{ width: "fit-content" }}
                    >
                      <li className="list-inline-item mx-2 ">
                        <a href="#" className="social-link">
                          <i className="fa-brands fa-x-twitter" style={{ color: "#fff" }}></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-2">
                        <a href="#" className="social-link">
                          <i
                            className="fa fa-instagram"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item mx-2">
                        <a href="#" className="social-link">
                          <i className="fa fa-linkedin" style={{ color: "#fff" }}></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container-fluid text-center my-3">
                <strong>
                  <font className="fs-1 text-center display-5">
                    <font color="#000">Domain Leads</font>
                  </font>
                </strong>
              </div>
              <div className="container my-5">
                <CardList teamData={domainLeadsData} />
              </div>

              <div className="container-fluid text-center my-3">
                <strong>
                  <font className="fs-1 text-center display-5">
                    <font color="#000">Core Team Members</font>
                  </font>
                </strong>
              </div>
              <div className="container my-5">
                <ul className="nav nav-pills d-flex justify-content-center border border-dark p-3" id="domainTabs">
                  {uniqueDomains.map((domain) => (
                    <li className="nav-item mx-3" key={domain}>
                      <a
                        className={`nav-link ${domain === activeDomain ? 'active' : ''}`}
                        onClick={() => handleTabClick(domain)}
                        style={{
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        {domain}
                      </a>
                    </li>
                  ))}
                </ul>
                <style>
                  {`
              .nav-link:hover {
                cursor: pointer;
              }
            `}
                </style>
                <div className="tab-content" id="domainTabsContent">
                  {uniqueDomains.map((domain) => (
                    <div
                      key={domain}
                      className={`tab-pane fade ${domain === activeDomain ? 'show active' : ''}`}
                    >
                      <CardList teamData={filterTeamMembers(CoreTeamData, domain)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Footer />
          </>
      }
    </>
  );
}
