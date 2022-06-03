import React from "react";
import styled from "styled-components";
import { Bounce, Flip, Fade } from "react-awesome-reveal";

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
const Text1 = styled.p`
  font-size: 1.5rem;
  margin: 0;
  background-clip: text;
  background: linear-gradient(
    90deg,
    #d53369,
    #de455e,
    #e35755,
    #e56a4d,
    #e57c49
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Text2 = styled.p`
  font-size: 1.5rem;
  margin: 0;
  background-clip: text;
  background: linear-gradient(90deg, #e57c49, #df9e4a, #daae51);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Flip direction="horizontal" duration={1000}>
          <Heading>Christoffer Naug</Heading>
        </Flip>

        <Bounce
          delay={850}
          style={{
            display: "inline-block",
          }}
        >
          <Text1>There will be something here.&nbsp;</Text1>
        </Bounce>
        <Fade
          direction="right"
          delay={1850}
          style={{
            display: "inline-block",
          }}
        >
          <Text2>Eventually.</Text2>
        </Fade>
      </Header>
    </Container>
  );
};

export default App;
