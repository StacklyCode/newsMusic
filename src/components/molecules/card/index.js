import AtomButton from '../../atoms/button';
import AtomTitle from '../../atoms/title';
import AtomBody from '../../atoms/body';

import AtomImage from '../../atoms/image';

import { Card, CardNews } from './style';

const MoleculeCard = ({
    description,
    datePublished,
    textButton,
    altText,
    imgSrc,
    title,
    link
    
}) => {
    return (
        <Card>
           
            <AtomImage>
                <img src={ imgSrc } alt={ altText } />
            </AtomImage>
            <CardNews>
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
                        { datePublished || 'March 22, 2021' }
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
                            { textButton || 'Read more' }
                        </AtomTitle>
                    </ AtomButton> 
            </div>
            
            </CardNews>
        </Card>
        
    )
}

export default MoleculeCard;
