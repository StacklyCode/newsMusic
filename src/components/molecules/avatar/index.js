import AtomImage from '../../atoms/image';
import AtomTitle from '../../atoms/title';

import { Avatar } from './style';

const MoleculeAvatar = ({
    image,
    title,
    link
}) => {
    return (
        <Avatar>
            <AtomImage>
              <img
                src={ image } 
                alt=''
              />  
            </AtomImage>
            <AtomTitle
                size='subtitleSmall'
                bold='semiBold'
                color='grey'
                href={ link }
            >
                { title || 'Band Metal' }
            </AtomTitle>
        </Avatar>
    )
}

export default MoleculeAvatar;
