import { Image } from './style';

const AtomImage = ({
    rounded,
    width,
    height,
    src

}) => {
    return (
        <Image 
            rounded={ rounded } 
            width={ width }
            height={ height }
        >
            <img 
                src={ src } alt=''/>
        </Image>
    );
}

export default AtomImage;