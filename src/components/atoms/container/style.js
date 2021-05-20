import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  margin: ${({ margin }) => (margin || "0px")};
  padding: ${({ padding }) => padding ||"0px"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  background-color: ${({ backgroudColor }) => backgroudColor || "transparent"}; 
`;