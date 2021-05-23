import AtomTitle from '../../atoms/title';
import AtomButton from '../../atoms/button';

import { StyledLabel } from './style';

const MoleculeLabel = ({ 
    link,
    text
}) => { 
    return (
        <>
            <StyledLabel>
                <AtomButton
                    color='tag'
                    href={ link }
                >
                    <AtomTitle 
                        size='subtitleXSmall'
                        bold='light'
                        color='grey'
                    >
                        { text || '#Rock' }
                    </AtomTitle>
                </AtomButton>
            </StyledLabel>
        </>
    );
}

export default MoleculeLabel;
