import React from "react";
import { Box, styled } from "@mui/material";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

const Component = styled("div")`
  padding: 10px;

  width: 100px;
  height: 100px;
  text-align: center;
background-color: #F0F0F0;
  line-height: 100px;
  border-radius: 100px;
  line-height: 100px;
  margin: 10px;
  font-size: 30px;
  overflow: hidden;
  transition: all 0.3s ease-out;
  &:hover {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
  }
`;

const Facebook = styled(Component)`
    &:hover{
        background-color:#1A6ED8;
    }
`


const Youtube = styled(Component)`
    &:hover{
        background-color:red;
    }
`


const Github = styled(Component)`
    &:hover{
        background-color:black;
    }
`

const LinkedIn = styled(Component)`
    &:hover{
        background-color:#0A66C2;
    }
`

const Footer = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          height: "500px",
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",

          padding: "5px",
        }}
      >
        <div>
          <img
            src="/img/GDSC.png"
            style={{ width: "300px", cursor: "pointer" }}
            onClick={() => {
              window.location = "https://developers.google.com/community";
            }}
          />
        </div>
        <div style={{ padding: "5px", cursor: "pointer" }}>
          <ul>
            <h3>About</h3>
            <li>Contact Us</li>

            <li
              onClick={() => {
                window.location =
                  "https://developers.google.com/community/gdsc";
              }}
            >
              About GDSC
            </li>

            <li
              onClick={() => {
                window.location = "https://policies.google.com/terms";
              }}
            >
              Terms
            </li>

            <li
              onClick={() => {
                window.location = "https://policies.google.com/privacy";
              }}
            >
              Privacy
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <Facebook
        
           
            onClick={() => {
              window.location = "https://www.facebook.com/GDSC.SMIT/";
            }}>
            <FaFacebookF style={{ color: "#1A6ED8",marginBottom:"15px" }}></FaFacebookF>
            <span style={{ color: "white" }}>Facebook</span>

          </Facebook>

          <Youtube
            onClick={() => {
              window.location = "https://www.youtube.com/googledevelopers";
            }}
          >
            <AiFillYoutube style={{ color: "red",marginBottom:"15px"  }}></AiFillYoutube>
            <span style={{ color: "white" }}>Youtube</span>
          </Youtube>

          <Github
            onClick={() => {
              window.location =
                "https://github.com/gdscsmit/gdscsmit.github.io";
            }}
          >
            <FaGithub style={{ color: "black" ,marginBottom:"15px" }}></FaGithub>
            <span style={{ color: "white" }}>GitHub</span>
          </Github>

          <LinkedIn
            onClick={() => {
              window.location =
                " https://www.linkedin.com/company/gdsc-smit/about/";
            }}
          >
            <FaLinkedin style={{ color: "#0A66C2",marginBottom:"15px"  }}></FaLinkedin>
            <span style={{ color: "white" }}>LinkedIn</span>
          </LinkedIn>
        </div>

        <div style={{ padding: "10px", cursor: "pointer" }}>
          <ul>
            <h3>HELP</h3>
            <li   
            onClick={()=>{
                window.location ="https://gdsc.community.dev/events/#/list"

            }}
               >UpComingEvents</li>

           

            <li
            onClick={()=>{
                window.location = "https://gdsc.community.dev/chapters/"
            }}
            >Chapters</li>

            <li
            onClick={()=>{
                window.location = "https://gdsc.community.dev/participation-terms/"
            }}
            >ParticipationTerms</li>
           
          </ul>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
        }}
      >
        <h4>© 2023 COPYRIGHT GDSC SMIT</h4>
      </div>
    </div>
  );
};

export default Footer;