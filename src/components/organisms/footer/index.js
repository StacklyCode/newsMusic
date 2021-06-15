import AtomTitle from '../../atoms/title';

import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinksItems,
    FooterLinks,
    FooterRights,
    WebsiteRight
} from './style';

const OrganismFooter = ({
    text,
    items,
    url
}) => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <AtomTitle>{ text || "Navegación" }</AtomTitle>
                            <FooterLinks href={ url }>{ items || "Inicio" }</FooterLinks>
                            <FooterLinks href={ url }>{ items || "Noticias" }</FooterLinks>
                            <FooterLinks href={ url }>{ items || "Conciertos" }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Entrevistas' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Galeria' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Contacto' }</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <AtomTitle>{ text || "Legales" }</AtomTitle>
                            <FooterLinks href={ url }>{ items || 'Terminos & Condiciones' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Politica de privacidad' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Seguridad' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Ayuda' }</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <AtomTitle>{ text ||  'Redes Sociales' }</AtomTitle>
                            <FooterLinks href={ url }>{ items || 'Facebook' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Instagram' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Twitter' }</FooterLinks>
                            <FooterLinks href={ url }>{ items || 'Youtube' }</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <FooterRights>
                    <WebsiteRight>
                        Industrial Engels &copy; {new Date().getFullYear()}. All rights reserved
                        <AtomTitle>
                            Development By <a href={ url } target='_blank'>StacklyCode</a>
                        </AtomTitle>
                    </WebsiteRight>
                </FooterRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default OrganismFooter;