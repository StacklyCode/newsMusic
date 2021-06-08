import styled from '@emotion/styled';

export const FooterContainer = styled.div`
    background-color: #000;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid grey;
    padding-bottom: 2rem;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 170px;
    box-sizing: border-box;
    color: #fff;

    h1 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 20px;
        letter-spacing: 0.03rem;
    }

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinks = styled.a`
    color: #dfeeea;
    text-decoration: none;
    margin-bottom: 0.4rem;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.03rem;

    &:hover {
        color: #a7c4bc;
        transition: 0.3s ease-out;
    }
`;

export const FooterRights = styled.div`
    margin: 1.2rem;
`;

export const WebsiteRight = styled.div`
    color: grey;
    font-size: 14px;
    margin-top: 0.9rem;

    h1 {
        padding: 16px;
        font-size: 13px;
        font-weight: 300;
        color: grey;
        text-align: center;
    }

    a {
        color: #cee5d0;
        cursor: pointer;
        font-weight: bold;
        text-decoration: none;

        &:hover {
            color: #a7c4bc;
            transition: 0.3s ease-out;
        }
    }
`;