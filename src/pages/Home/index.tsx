import React from "react";
import { Container, Text, Photo, Button } from "./Home.styles";
import Img from "../../images/quran.png";

const Home = () => {
  return (
    <Container>
      <Text>
        بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
        <p>In the name of Allah, the Merciful and the Merciful</p>
      </Text>
      <Photo>
        <img src={Img} alt="photo" />
      </Photo>
      <Button to="/surahs">Start</Button>
    </Container>
  );
};

export default Home;
