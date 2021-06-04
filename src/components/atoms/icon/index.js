import dynamic from "next/dynamic";
import { IconStyled } from "./style";
// import '../../../assets/icon/music.svg'


const AtomIcon = ({ children, icon, size, name, zindex, rotate, width }) => {
  const DynamicIcon = dynamic(
    () => import(`../../../assets/icon/music.svg`).catch(()=>{return false})
  );


  return (
    <IconStyled
      width={size}
      name={name}
      zindex={zindex}
      rotate={rotate}
      width={width}
    >
      {DynamicIcon && (<DynamicIcon />)}
      {children}
    </IconStyled>
  );
};

export default AtomIcon;
