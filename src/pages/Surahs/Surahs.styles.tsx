import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  padding: 15px;
`;
export const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Pag = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 50px;
`;
