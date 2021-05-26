import AtomButton from '../../atoms/button';
import AtomTitle from '../../atoms/title';
import AtomBody from '../../atoms/body';

import AtomImage from '../../atoms/image';

import { Card, CardNews } from './style';

const MoleculeCard = ({
    description,
    title,
    link,
    src
    
}) => {
    return (
        <Card>
           
            <AtomImage>
                <img src={ src } alt='' />
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
            
            </CardNews>
        </Card>
        
    )
}

export default MoleculeCard;