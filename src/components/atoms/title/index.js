import { Title } from './style';

const AtomTitle = ({
    children,
    weight,
    color,
    size
}) => {
    return (
        <Title 
            color={ color } 
            size={ size } 
            weight={ weight }
        >
            { children || "Text" }
        </Title>
    )
}

export default AtomTitle;