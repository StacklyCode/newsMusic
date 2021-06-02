import AtomTitle from '../../atoms/title';
import AtomButton from '../../atoms/button';
import AtomBody from '../../atoms/body';
import AtomImage from '../../atoms/image';

import { 
    StyleContainer, 
    StyleNumber, 
    InformationStyle, 
    StyleLocation, 
    StyleImage 
} from './style';

const OrganismEvent = ({
    timeEvent,
    nameBand,
    buyTicket,
    countryName,
    eventAddress,
    textLocation,
    dateNumber,
    dateEvent
}) => {
    return (

        <StyleContainer>
            
            <StyleNumber>
                <AtomTitle
                    size='titleXLarge'
                    bold='semiBold'
                    color='extraLightBlue'
                >{ dateNumber || '07' }</AtomTitle>
                <AtomBody>{ dateEvent || 'march 2021' }</AtomBody>
            </StyleNumber>

            <InformationStyle>
                <AtomBody>{ timeEvent || '23:00pm - 03:00am'}</AtomBody>
                <AtomTitle
                    size='titleSmall'
                    bold='semiBold'
                    color='extraLightBlue'
                >
                    { nameBand || 'Kiss My Ass'}
                </AtomTitle>
                <AtomButton 
                    color='linkers'
                >
                    <AtomTitle
                        size='subtitleLarge'
                    >
                        { buyTicket || 'Buy Ticket' }
                    </AtomTitle>
                </AtomButton>
            </InformationStyle>

            <StyleLocation>
                <AtomBody>
                    { textLocation || 'Location' }
                </AtomBody>
                <AtomTitle
                    size='titleSmall'
                    bold='semiBold'
                    color='mediumGrey'
                >
                    { countryName || 'Chile' }
                </AtomTitle>
                <AtomBody>
                    { eventAddress || '33 505th Street' }
                </AtomBody>
            </StyleLocation>

            <StyleImage>
                <AtomImage />
            </StyleImage>

        </StyleContainer>
        
    )
}

export default OrganismEvent;