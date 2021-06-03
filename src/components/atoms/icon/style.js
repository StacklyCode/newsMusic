import styled from '@emotion/styled';

export const IconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: ${({ size }) => size || "100%"};
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    path {
      width: 100%;
    }
  }
  z-index: ${({ zindex }) => zindex || "auto"};
  transform: rotate(${({ rotate }) => rotate || "0"}deg);
  p {
    position: absolute;
    top: 30px;
    left: 25px;
  }
`;
