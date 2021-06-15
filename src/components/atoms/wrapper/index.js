import { Container } from "./style";

const AtomWrapper = ({
  children,
  alignItems,
  justifyContent,
  fullwidth,
  display,
  columns,
  flexDirection,
  backgroudColor,
  margin,
  padding,
  width,
  height,
  cursor,
  borderradius,
  gap,
  flexwrap
}) => {
  return (
    <Container
      alignItems={alignItems}
      justifyContent={justifyContent}
      fullwidth={fullwidth}
      display={display}
      columns={columns}
      flexDirection={flexDirection}
      backgroudColor={backgroudColor}
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      cursor={cursor}
      borderradius={borderradius}
      flexwrap={flexwrap}
      gap={gap}
    >
      {children}
    </Container>
  );
};

export default AtomWrapper;
