import { Title } from './styled';

const AtomTitle = ({
    children,
    theme,
    link
}) => {
    return (
        <Title 
            theme={ theme }
            link={ link }
        >
            { children || "Text" }
        </Title>
    )
}

export default AtomTitle;