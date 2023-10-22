import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom"
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Component = styled("div")`
  padding: 10px;
  width: 60px;
  height: 60px;
  text-align: center;
  background-color: #f0f0f0;
  line-height: 100px;
  border-radius: 100px;
  line-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  overflow: hidden;
  transition: all 0.3s ease-out;
  & > span {
    display: none;
  }
  &:hover > svg {
    display: none;
  }
  &:hover > span {
    display: inline;
  }
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
    <footer
      className="d-flex justify-content-around fw-bold align-items-center my-4" >
      <div>
        <Link to='/'>
          <img
            className="my-3"
            src="/img/logo.png"
            style={{ width: "15rem", height: "38px", cursor: "pointer" }}
          />
        </Link>
      </div>

      <div className="text-center" style={{ display: "flex", gap: "20px", position: "absolute" }}>
        <Instagram
          onClick={() => {
            window.location = "https://www.instagram.com/gdscsmit/";
          }}
        >
          <BsInstagram
            style={{ color: "#d62976" }}
          ></BsInstagram>
          <span className="text-center" style={{ color: "white" }}>Instagram</span>
        </Instagram>

        <Github
          onClick={() => {
            window.location =
              "https://github.com/gdscsmit/gdscsmit.github.io";
          }}
        >
          <FaGithub className="text-center"
            style={{ color: "black" }}
          ></FaGithub>
          <span className="text-center" style={{ color: "white" }}>GitHub</span>
        </Github>

        <LinkedIn
          onClick={() => {
            window.location =
              " https://www.linkedin.com/company/gdscsmit/about/";
          }}
        >
          <FaLinkedin className="text-center"
            style={{ color: "#0A66C2" }}
          ></FaLinkedin>
          <span className="text-center" style={{ color: "white" }}>LinkedIn</span>
        </LinkedIn>
      </div>

      <div className="text-center">
        <p>© 2023 COPYRIGHT GDSC SMIT</p>
      </div>

    </footer>

  );
};

export default Footer;
