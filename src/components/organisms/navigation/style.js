import styled from '@emotion/styled';

export const Header = styled.header`
    border: 1px solid transparent;
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    transition: all 0.4s ease;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
`;

export const Flex = styled.div`
    display: flex;
    border: 1px solid transparent;
    margin: 0.8rem;
    margin-right: auto;
    margin-left: auto;

    h1 {
        padding: 1.5rem 2.7rem;
        border: 1px solid transparent;
        letter-spacing: 0.05rem;
        margin: 0.1rem;
        cursor: pointer;
    }
`;

export const Logo = styled.div`
    border: 1px solid transparent;

    img {
        margin: 0.3rem;
        height: 40px;
        width: 70px;
    }
`;