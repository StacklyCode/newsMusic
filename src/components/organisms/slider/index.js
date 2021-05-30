import MoleculeCard from '../../molecules/card';
import AtomTitle from '../../atoms/title';

import { Slider, StyleCard, StyleText } from './style'

const data = [
    {
        id: 1,
        // imgSrc: ImageOne,
        title: 'Asking Alexandria',
        datePublished: 'May 10, 2021',
        description: 'Asking Alexandria es una banda británica de screamo/metalcore​​ integrada actualmente por Danny Worsnop, Ben Bruce...',
        textButton: 'Read more'
    },
    {
        id: 2,
        // imgSrc: ImageTwo,
        title: 'ADTR: In Perú',
        datePublished: 'April 22, 2021',
        description: 'A Day to Remember es una banda estadounidense de Pop Punk y Metalcore formada en Ocala, Florida, en 2003. Se caracterizan...',
        textButton: 'Read more'
    },
    {
        id: 3,
        // imgSrc: ImageThree,
        title: 'BMTH: Announces its return',
        datePublished: 'March 22, 2021',
        description: 'Bring Me the Horizon es una banda británica de rock provenientes de Sheffield, Inglaterra. Se formó en 2003 y actualmente...',
        textButton: 'Read more'
    }
]

const OrganismSlider = ({
    title
}) => {
    return (
        <Slider>
            <StyleText>
                <AtomTitle
                    size='titleSXmall'
                    bold='semiBold'
                    color='grey'
                >{ title || "Last News" }</AtomTitle>
            </StyleText>
            <StyleCard>
                {data.map((item) => (
                    <MoleculeCard 
                        key={ item.id }
                        // src={ item.imgSrc }
                        alt={ item.altText }
                        title={ item.title }
                        datePublished={ item.datePublished }
                        description={ item.description }
                        textButton={ item.textButton }
                    />
                ))}
            </StyleCard>
        </Slider>
    )
}

export default OrganismSlider;