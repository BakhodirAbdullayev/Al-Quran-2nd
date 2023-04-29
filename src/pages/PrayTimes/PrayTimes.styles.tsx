import styled from "styled-components";
import { first } from "../../styles/responsive";

export const TimesWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  display: grid;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
  grid-template-columns: repeat(2, minmax(250px, 600px));
  ${first({
    width: "98%",
  })}
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;
export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
`;
export const Head = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 2.5px 2.5px 3px rgba(0, 80, 55, 0.85);
  color: #005036;
  ${first({
    fontSize: "28px",
    lineHeight: 1,
  })}
`;
export const Settings = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 5px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
  }
`;
export const Now = styled.div`
  font-size: 32px;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
  ${first({
    fontSize: 25,
  })}
`;
export const Region = styled.div``;
