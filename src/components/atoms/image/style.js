import styled from "@emotion/styled";
import { css } from "@emotion/react";
export const Image = styled.div`
  align-items: center;
  justify-content: center;
  ${({ width }) => width && css`width:${width}`};
  ${({ height }) => height && css`height:${height}`};
  ${({ theme }) =>
    theme && {
      filter: "opacity(75%)",
    }}

  img {
    ${({ radius }) =>
      radius === "max" && {
        borderRadius: "100px",
      }}
    ${({ radius }) =>
      radius === "min" && {
        borderRadius: "10px",
      }}
        object-fit: cover;
  }

  transition: all 0.5s ease;
`;
