import styled from "@emotion/styled";
import React, { Children } from "react";

const Textbody = styled.div`
  p {
    font-size: ${({ size }) => size || "24px"};
    font-family: ${({ ffamily }) => ffamily || "Verdana"};
    color: ${({ color }) => color || "#FFFFFF"};
    font-weight:${({ fweight }) => fweight || "normal"} ;
  }
`;

const TextAtom = (props) => {
  const { children } = props;
  return (
    <Textbody {...props}>
      <p>{children || "Default text"}</p>
    </Textbody>
  );
};

export default TextAtom;
