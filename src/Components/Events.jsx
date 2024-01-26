import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";

function Events() {
  const imgUrl = "/img/GDSC7DayBootcamp.jpg";

  const Container = styled("div")`
    padding: 100px 40px;
    gap: 2rem;
    flex-wrap: wrap;
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  return (
    <>
      <Navbar />
      <Container>
        <Card
          title={"7 Day Bootcamp"}
          date={"17/01/24"}
          imgUrl={imgUrl}
          desc={"Organised a 7 day bootcamp of all the active domains!"}
          instagram={"https://www.instagram.com/gdscsmit?igsh=cHRrZWp4bjN1bmVq"}
        />
      </Container>
      <Footer />
    </>
  );
}

export default Events;
