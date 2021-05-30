import styled from "@emotion/styled";

export const MapStyled = styled.iframe`
  height: ${({ height }) => height || "100px"};
  width: ${({ width }) => width || "100px"};
`;
