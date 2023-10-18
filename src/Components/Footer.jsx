import React from "react";
import { styled } from "@mui/material";

import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Component = styled("div")`
  padding: 10px;

  width: 60px;
  height: 60px;
  text-align: center;
  background-color: #f0f0f0;
  line-height: 100px;
  border-radius: 100px;
  line-height: 100px;

  font-size: 30px;
  overflow: hidden;
  transition: all 0.3s ease-out;
  &:hover {
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }
`;

const Instagram = styled(Component)`
  &:hover {
    background-color: #d62976;
  }
`;

const Github = styled(Component)`
  &:hover {
    background-color: black;
  }
`;

const LinkedIn = styled(Component)`
  &:hover {
    background-color: #0a66c2;
  }
`;

const Footer = () => {
  return (
    <div className="Feet">
        
      <div
        className="Links"
        style={{
          display: "flex",
          justifyContent: "center",
          gap:"100px",

          alignItems: "center",

         
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",
        
        }}
      >
        <div>
          <img
            src="/img/GDSC.png"
            style={{ width: "230px", height: "250px", cursor: "pointer" }}
            onClick={() => {
              window.location = "https://developers.google.com/community";
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
          <Instagram
            onClick={() => {
              window.location = "https://www.instagram.com/gdscsmit/";
            }}
          >
            <BsInstagram
              style={{ color: "#d62976 ", marginBottom: "55px" }}
            ></BsInstagram>
            <span style={{ color: "white" }}>Instagram</span>
          </Instagram>

          <Github
            onClick={() => {
              window.location =
                "https://github.com/gdscsmit/gdscsmit.github.io";
            }}
          >
            <FaGithub
              style={{ color: "black", marginBottom: "55px" }}
            ></FaGithub>
            <span style={{ color: "white" }}>GitHub</span>
          </Github>

          <LinkedIn
            onClick={() => {
              window.location =
                " https://www.linkedin.com/company/gdsc-smit/about/";
            }}
          >
            <FaLinkedin
              style={{ color: "#0A66C2", marginBottom: "55px" }}
            ></FaLinkedin>
            <span style={{ color: "white" }}>LinkedIn</span>
          </LinkedIn>
        </div>

        <div style={{ padding: "5px", cursor: "pointer" }}>
          <ul className="custom-list">
            <h6>Quick Links</h6>
            <li>
              <span>Contact Us</span>
            </li>

            <li
              onClick={() => {
                window.location =
                  "https://developers.google.com/community/gdsc";
              }}
            >
              <span>About GDSC</span>
            </li>

            <li
              onClick={() => {
                window.location = "https://policies.google.com/terms";
              }}
            >
              <span>Terms</span>
            </li>

            <li
              onClick={() => {
                window.location = "https://policies.google.com/privacy";
              }}
            >
              <span>Privacy</span>
            </li>
            <li
              onClick={() => {
                window.location = "https://gdsc.community.dev/events/#/list";
              }}
            >
              <span>UpComingEvents</span>
            </li>

            <li
              onClick={() => {
                window.location = "https://gdsc.community.dev/chapters/";
              }}
            >
              Chapters
            </li>

            <li
              onClick={() => {
                window.location =
                  "https://gdsc.community.dev/participation-terms/";
              }}
            >
              ParticipationTerms
            </li>
            
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center" ,marginBottom:"50px"}}>
        <p>© 2023 COPYRIGHT GDSC SMIT</p>
      </div>

      
    </div>
  );
};

export default Footer;
