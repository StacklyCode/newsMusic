import AtomButton from '../../atoms/button';
import AtomTitle from '../../atoms/title';
import AtomBody from '../../atoms/body';

import { Tag, TagContainer } from './style';

const MoleculeTag = ({
    description,
    height,
    border,
    title,
    width,
    link
    
}) => {
    return (
        <Tag
            width={ width }
            height={ height } 
        >
            <TagContainer
                border={ border }
            >
                <div>
                    <AtomTitle
                        size='titleSmall'
                        color='lightWhite'
                        bold='semiBold'
                    >
                        { title || 'Title' }
                    </AtomTitle>

                    <AtomTitle 
                        size='subtitleSmall' 
                        color='grey'
                        bold='light'
                    >
                        { description || 'March 22, 2021' }
                    </AtomTitle>

                    <AtomBody>
                        { description || 'Information about the event, the band, the artist, etc,.' }
                    </AtomBody>

                    < AtomButton 
                        color='linkers'
                        link={ link }
                    >
                        <AtomTitle 
                            size='subtitleMedium'
                            color='blue'
                            bold='semiBold'
                        >
                            { description || 'Read more' }
                        </AtomTitle>
                    </ AtomButton> 
                </div>
            </TagContainer>
        </Tag>
    )
}

export default MoleculeTag;