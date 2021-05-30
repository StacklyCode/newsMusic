import { StyledButton } from './style';

const AtomButton = ({ 
    children,
    color,
    type,
    size,
    href,
    link
}) => {

    if (href) {
        return (
            <a target="_blank" href={ href }>
              <StyledButton color={ color } >
                { children || "Text" }
              </StyledButton>
            </a>
        );
    }

    if (link) {
        return (
          <Link href={ link }>
            <StyledButton color={ color } outline={ outline }>
              { children || "Text" }
            </StyledButton>
          </Link>
        );
    }

    return (
        <StyledButton type={ type } color={ color } size={ size }>
          { children || "Text" }
        </StyledButton>
      );
};

export default AtomButton;
