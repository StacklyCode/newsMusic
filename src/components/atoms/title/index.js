import { Title } from './style';

const AtomTitle = ({
    children,
    size
    
}) => {
    return (
        <Title 
            size={ size }
        >
            { children || "Text" }
        </Title>
    )
}

export default AtomTitle;
