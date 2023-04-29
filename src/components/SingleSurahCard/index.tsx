import React from "react";
import {
  Arabic,
  Container,
  Engl,
  EnglMean,
  Left,
  Right,
} from "./SingleSurahCard.styles";
import { SingleSurahCardProps } from "./SingleSurahCard.types";

const SingleSurahCard = ({ data }: SingleSurahCardProps) => {
  return (
    <Container to={`/surahs/${data.number}`}>
      <Left>{data.number}</Left>
      <Right>
        <Arabic>{data.name}</Arabic>
        <Engl>{data.englishName}</Engl>
        <EnglMean>{data.englishNameTranslation}</EnglMean>
      </Right>
    </Container>
  );
};

export default SingleSurahCard;
