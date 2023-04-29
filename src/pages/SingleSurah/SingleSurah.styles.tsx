import styled from "styled-components";
import { first, mobile } from "../../styles/responsive";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: space-between;
  .scroll {
    overflow-y: scroll;
    height: calc(100vh - 115px);
    &::-webkit-scrollbar {
      width: 4px; /* width of the entire scrollbar */
      ${mobile({
        width: 0,
      })}
    }

    &::-webkit-scrollbar-track {
      background: #b4c8d2; /* color of the tracking area */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #005036; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  }
`;

export const Left = styled.div`
  background-color: #fff;
  width: calc(100% - 270px);
  ${first({
    width: "100%",
  })};
`;
export const Right = styled.div<{ toggle: boolean }>`
  padding: 5px;
  width: 270px;
  background-color: #fff;
  transition: 0.5s ease;
  position: relative;
  ${first({
    position: "fixed",
    top: 75,
    right: (p: any) => (p.toggle ? 0 : "-300px"),
    background: "#e3e3e3",
    minHeight: "calc(100vh - 75px)",
    zIndex: 999,
  })}
  &::before {
    content: "";
    display: none;
    top: 75px;
    left: 0px;
    width: calc(100vw - 287px);
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1000;
    transition: 0.4s;
    ${first({
      display: "block",
      left: (p: any) => (p.toggle ? 0 : "-100%"),
    })}
  }
`;
