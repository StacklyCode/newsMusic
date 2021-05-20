import AtomTitle from '../../atoms/title';
import AtomButton from '../../atoms/button';

const MoleculeLabel = ({ 
    color = 'tag',
    theme = 'tag',
    link
}) => { 
    return (
        <AtomButton 
            color={ color } 
            link={ link }
        >
            <AtomTitle theme={ theme }></AtomTitle>
        </AtomButton>
    );
}

export default MoleculeLabel;