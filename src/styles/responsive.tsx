import { css } from "styled-components";
type func = (p: any) => number | string;
interface Props {
  [key: string]: any;
}

export const first = (p: Props) => {
  return css`
    @media only screen and (max-width: 850px) {
      ${p}
    }
  `;
};
export const mobile = (p: Props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${p}
    }
  `;
};
