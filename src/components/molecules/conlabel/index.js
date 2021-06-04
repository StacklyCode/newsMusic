import React from "react";
import TextAtom from "../../atoms/body";
import AtomIcon from "../../atoms/icon";
import AtomWrapper from "../../atoms/wrapper";
import { AtomTextBodyStyled, ContainerStyled } from "./styled";
//import "./../../../../public/music.svg";
// import AtomWrapper from "../../atoms/wrapper";

const MoleculeConlabel = ({ text,color }) => {
  return (
    <AtomWrapper display="flex" alignItems="center">
      <AtomWrapper borderradius="50%" backgroudColor="#1F1F24" padding="19px 19px" width="auto" margin="0px 23px 0px 0px">
        <AtomIcon icon="music" size={14} />
      </AtomWrapper >
      <TextAtom color={color}>{text}</TextAtom>
    </AtomWrapper>
  );
};

export default MoleculeConlabel;
