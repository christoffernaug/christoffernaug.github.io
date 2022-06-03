import React from "react";
import styled from "styled-components";
import { Bounce, Flip } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  font-family: "Akshar", sans-serif;
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: #b4c1d1;
  margin: 0;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Flip direction="horizontal" duration={1000}>
          <Heading>Christoffer Naug</Heading>
        </Flip>

        <Bounce delay={850}>
          <Subheading>There will be something here. Eventually.</Subheading>
        </Bounce>
      </Header>
    </Container>
  );
};

export default App;
