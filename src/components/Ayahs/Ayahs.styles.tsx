import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 0 3px 0 0;
  background-color: rgba(0, 0, 0, 0.05);

  ${mobile({
    paddingBottom: 100,
  })}
`;

export const Ayah = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;
export const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  /* align-items: center; */
  justify-content: space-between;
  margin: 10px auto;
  font-size: 20px;
`;
export const Left = styled.div`
  font-weight: 600;
  color: #005036;
`;
export const Right = styled.div`
  text-align: right;
  font-weight: 600;
`;
export const Translate = styled.div`
  width: 100%;
  padding: 15px 0 20px;
  text-align: justify;
  font-size: 16px;
  line-height: 1;
  border-bottom: 2px solid #b4c8d2;
`;
export const Bottom = styled.div`
  padding: 20px 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  color: #a5bcc6;
`;
export const Like = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
`;
export const Share = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
`;
export const Play = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
`;
export const Sajda = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #a5bcc6;
  font-size: 20px;
  .active {
    color: #005036;
  }
`;
