import styled from "styled-components";
import { Link } from "react-router-dom";
import Bg from "../../images/symbol.png";

export const Container = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(181, 238, 230, 0.2);
  gap: 10px;
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 3px 5px 2px #a5bcc6;
    background-color: rgba(181, 238, 230, 0.1);
  }
`;
export const Left = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${(p) => Bg});
  background-size: cover;
  background-position: center;

  display: grid;
  place-items: center;
  font-weight: 600;
  color: #005036;
`;
export const Right = styled.div`
  width: calc(100% - 80px);
  line-height: 1;
`;

export const Arabic = styled.div`
  width: 100%;
  text-align: right;
  font-size: 15px;
  font-weight: 600;
`;
export const Engl = styled.div`
  font-size: 20px;
  margin-top: 10px;
  color: #005036;
  font-weight: 600;
`;
export const EnglMean = styled.div`
  font-size: 16px;
  color: #5da59b;
`;
