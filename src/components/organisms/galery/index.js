import Image   from "../../atoms/image";
import AtomWrapper from "../../atoms/wrapper";

const OrganismGalery = ({img1, img2, img3,img4, width,height}) => {
  return (
    <AtomWrapper width={width||"820px"} height={height||"477px"} display="grid" columns="3" gap="15px">
      <AtomWrapper>
        <Image  radius="min" width="100%" height="100%" image={img1}/>
      </AtomWrapper>
      <AtomWrapper display="flex" flexDirection="column" gap="18px">
        <AtomWrapper height="50%">
        <Image  radius="min" width="100%" height="100%" image={img2}/>
        </AtomWrapper>
        <AtomWrapper height="50%">
        <Image  radius="min" width="100%" height="100%" image={img3}/>
        </AtomWrapper>
      </AtomWrapper>
      <AtomWrapper>
      <Image  radius="min" width="100%" height="100%" image={img4}/>
      </AtomWrapper>
    </AtomWrapper>
  );
};

export default OrganismGalery;
