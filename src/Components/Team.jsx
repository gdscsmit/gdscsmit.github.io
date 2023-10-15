import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { leadImg, CoreTeamData, domainLeadsData } from "../constants/team";
import { Loader } from "./Loader";

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
              <i className="fa fa-twitter" style={{ color: "#fff" }}></i>
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
  console.log(teamData);
  return (
    <div className="row text-center justify-content-center my-5">
      {teamData.map((data, index) => (
        <Card key={data.id} data={data} />
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
    setTimeout(() => {

      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {
        loading ? <Loader /> :
          <>
            <Navbar />

            <div id="endcontain" className="container-fluid text-center my-3">
              <strong>
                <font className="fw-bold fs-1 text-uppercase">
                  <font color="#4285F4">GDSC </font>
                  <font color="#EA4335">SMIT </font>
                  <font color="#F4B400">Team </font>
                  <font color="#34A853">2023 </font>
                </font>
              </strong>
            </div>

            <div className="my-5 w-75 mx-auto">
              <div className="d-flex flex-column justify-center">
                <h1 className="text-center display-5 font-bold">Our Team</h1>
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
                          <i className="fa fa-twitter" style={{ color: "#fff" }}></i>
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
