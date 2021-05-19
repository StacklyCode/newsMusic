import { Container } from "./style";

const AtomContainer = (props) => {
    const { children } = props;
    return <Container {...props}>{children}</Container>;
  };

  export default AtomContainer;