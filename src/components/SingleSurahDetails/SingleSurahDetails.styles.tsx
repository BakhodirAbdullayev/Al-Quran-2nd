import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { first } from "../../styles/responsive";

export const Container = styled.div``;

export const SurahList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  ${first({
    backgroundColor: "transparent",
  })}
`;
export const Card = styled(NavLink)`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  gap: 15px;
  border: 2px solid transparent;
  transition: 0.3s;
  &:hover {
    background-color: rgba(93, 165, 155, 0.2);
    box-shadow: 0px 2px 3px 1px rgba(93, 165, 155, 0.7);
  }
  &.active {
    border-color: #005036;
    &:hover {
      background-color: #5da59b;
      color: #fff;
      box-shadow: none;
    }
  }
`;
export const Left = styled.div`
  width: 12%;
`;
export const Num = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #005036;
  color: #fff;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  display: grid;
  place-items: center;
`;
export const Right = styled.div`
  width: 70%;
`;
export const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const NameT = styled.div`
  font-size: 14px;
  color: #a5bcc6;
`;
export const Title = styled.p`
  width: 200px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    font-size: 18px;
  }
`;
