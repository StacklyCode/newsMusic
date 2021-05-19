import styled from "@emotion/styled";


export const Container = styled.div<AtomWrapperProps>`
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
`;