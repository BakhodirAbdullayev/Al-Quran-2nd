import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const Container = styled.div`
  width: 75px;
  height: calc(100vh - 75px);
  position: fixed;
  bottom: 0;
  background: #fff;
  ${mobile({
    width: "100%",
    height: 60,
    padding: 10,
    left: 0,
    right: 0,
    borderRadius: "15px 15px 0 0",
    boxShadow: "0 0 1px 1px #005036",
  })}
`;
export const LinksWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  ${mobile({
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  })}
`;
export const Link = styled(NavLink)`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  font-size: 20px;
  border-radius: 10px;
  color: #b4c8d2;
  transition: 0.4s;
  &:hover {
    color: #005036;
  }
  &.active {
    background-color: #b4c8d2;
    color: #111;
  }
`;
