import { Container, Flex, Logo } from './style';
import AtomTitle from '../../atoms/title';
import menuItems from './navigation-data';
import Link from 'next/link';

import LogoImg from '../../../assets/logo.svg';

const OrganismNavigation = ({

}) => {
    return (
        <header>
            <Container>
                <Flex>
                    <Logo>
                        <img src={ LogoImg } alt='Logo' />
                    </Logo>
                    { menuItems.map((menuItem, i) => (
                        <Link
                            href={ menuItem.path }
                            key={ i }
                        >    
                            <AtomTitle
                                size='subtitleLarge'
                                bold='medium'
                                color='grey'
                            >
                                { menuItem.label }
                            </AtomTitle>
                        </Link>
                    ))}
                </Flex>
            </Container>
        </header>
    )
}

export default OrganismNavigation;