import styled from "styled-components";
import { first } from "../../styles/responsive";

export const Time = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #5da59b;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 5px #005036, 0 0 8px #005036;
  }
  &.active {
    background-color: #b4c8d2;
    box-shadow: 2px 3px 2px #005036;
  }
  ${first({
    padding: "8px 10px",
  })}
`;
export const Left = styled.span`
  width: 20%;
  height: 100%;
  font-size: 50px;
  display: grid;
  place-items: center;
  border-right: 1px solid #5da59b;
  color: #005036;
  ${first({
    fontSize: 35,
  })}
`;
export const Right = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${first({
    alignItems: "flex-end",
  })}
`;
export const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  ${first({
    fontSize: 25,
  })}
`;
export const TimePray = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 26px;
  font-weight: 600;
  ${first({
    fontSize: 22,
  })}
`;
