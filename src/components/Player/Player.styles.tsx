import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const Container = styled.div`
  width: 100%;
  max-width: 1340px;
  height: 50px;
  overflow: hidden;
  background-color: #5da59b;
  .audio {
    width: calc(100% + 100px);
    margin-left: -50px;
    height: 100%;
    outline: none;
    &::-webkit-media-controls-panel {
      background-color: #005036;
      border-radius: 0;
      outline: none;
      height: 100%;
      padding: 0 50px;
      padding-right: 90px;
      ${mobile({
        paddingLeft: "30px",
        backgroundColor: "rgba(0, 80, 55, 0.9)",
      })}
    }
    &::-webkit-media-controls-play-button {
      background-color: #fff;
      border-radius: 50%;
      margin-right: 40px;
      margin-left: 54px;
      ${mobile({
        marginRight: 25,
      })}
    }
    &::-webkit-media-controls-current-time-display {
      color: #fff;
    }
    &::-webkit-media-controls-time-remaining-display {
      color: #fff;
    }
    &::-webkit-media-controls-timeline {
      background-color: #fff;
      border-radius: 2px;
      padding: 3px 2px;
      margin-left: 10px;
      margin-right: 10px;
      width: calc(100% - 800px);
    }
    &::-webkit-media-controls-volume-slider {
      padding: 3px 2px;
      margin-top: 11px;
      border-radius: 3px;
      background-color: #f2f4f6;
    }
  }
  ${mobile({
    top: 75,
  })}
`;
export const Prew = styled.button`
  position: absolute;
  left: 20px;
  top: 25px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;
  display: grid;
  place-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 22px;
  color: #000;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  ${mobile({
    left: 5,
  })}
`;
export const Next = styled(Prew)`
  left: 90px;
  ${mobile({
    left: 65,
  })}
`;
export const Delete = styled(Prew)`
  left: calc(100% - 40px);
`;
