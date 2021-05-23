import { Image } from './style';

const AtomImage = ({
    radius,
    theme,
    image

}) => {
    return (
        <Image 
            theme={ theme }
            radius={ radius }
            
        >
            <img
                src={ image || 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
                width='100%'
                height='100%'
                loading='lazy'
                alt=''

            />
        </Image>
    );
}

export default AtomImage;
