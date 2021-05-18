import React from "react";
import "../home.scss";
import { Container } from "react-bootstrap";
import HomeContent from "./homeContent";

const Home = () => {
  return (
    <Container fluid>
      <HomeContent />
    </Container>
  );
};

export default Home;
