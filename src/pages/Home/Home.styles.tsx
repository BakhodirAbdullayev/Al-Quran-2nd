import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 15px;
`;
export const Text = styled.h3`
  text-align: center;
  font-size: 55px;
  font-family: serif;
  color: #005306;
  p {
    font-size: 20px;
    font-weight: 500;
    opacity: 0.9;
  }
`;
export const Photo = styled.div`
  max-width: 240px;
  width: 90%;
  filter: drop-shadow(3px 3px 3px red) invert(75%) hue-rotate(330deg);
  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const Button = styled(Link)`
  border: none;
  background-color: rgba(0, 80, 55, 0.8);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: 1px 2px 5px #005036;
  }
`;
