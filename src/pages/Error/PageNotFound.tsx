import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import ErrorImg from "../../images/error.svg";

const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <Wrapper>
      <img src={ErrorImg} alt="error" />
      <Button onClick={() => nav(-1)} className="btn">
        Go Back
      </Button>
    </Wrapper>
  );
};
const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  font-weight: 600;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 5px;
  &:hover,
  &:active {
    box-shadow: 3px 6px 10px rgb(132 144 255);
  }
  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;
const Wrapper = styled.section`
  max-width: 1300px;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(0.5);
  filter: hue-rotate(275deg);
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
  img {
    width: 100%;
  }
`;

export default PageNotFound;
