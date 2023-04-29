import styled from "styled-components";
import { Link } from "react-router-dom";
import { first, mobile } from "../../styles/responsive";

export const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  background-color: #fff;
`;

export const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled(Link)`
  width: 75px;
  height: 75px;
  background-color: #005036;
  display: grid;
  place-items: center;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  width: 100%;
  /* height: calc(100vh - 75px); */
  display: flex;
`;

export const Left = styled.div`
  width: 75px;
  position: relative;
  ${mobile({
    width: 0,
  })}
`;
export const Right = styled.div`
  min-height: calc(100vh - 75px);
  width: calc(100% - 75px);
  background-color: rgba(0, 0, 0, 0.05);
  padding: 20px;
  ${mobile({
    width: "100%",
  })}
`;
export const Toggle = styled.button`
  margin-right: 15px;
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  display: none;
  place-items: center;
  font-size: 30px;
  cursor: pointer;
  color: #002d1e;
  ${first({
    display: "grid",
  })}
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  height: 35px;
  position: sticky;
  top: 95px;
  z-index: 99;
  .test {
    width: calc(100% + 40px);
    height: 50px;
    position: absolute;
    top: -20px;
    left: -20px;
    background-color: #345;
  }
`;
