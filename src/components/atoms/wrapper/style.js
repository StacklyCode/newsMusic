import styled from "@emotion/styled";
import {css} from "@emotion/react";
export const Container = styled.div`
  position: relative;
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "100%"};
  display: ${({ display }) => display || "flex"};
  grid-template-columns: repeat(${({ columns }) => columns || 1}, 1fr);
  margin: ${({ margin }) => margin || "0px"};
  padding: ${({ padding }) => padding || "0px"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  background-color: ${({ backgroudColor }) => backgroudColor || "transparent"};
  border-radius: ${({ borderradius }) => borderradius || "0px"};
  ${({cursorPointer}) => (cursorPointer && css`cursor: pointer;`)}
`;
