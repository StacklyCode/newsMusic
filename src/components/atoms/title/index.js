import { Title } from './style';

const AtomTitle = ({
    children,
    align,
    color,
    bold,
    size
    
}) => {
    return (
        <Title 
            size={ size }
            color={ color }
            bold={ bold }
            align={ align }
        >
            { children || "Text" }
        </Title>
    )
}

export default AtomTitle;
