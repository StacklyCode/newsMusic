import styled from '@emotion/styled';

export const Title = styled.h1`
    ${({ theme }) =>
    theme === 'primary' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#fafafa',
        fontFamily: 'inherit',
        fontWeight: '700px',
        fontSize: '40px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
    }}
    ${({ theme }) =>
    theme === 'secondary' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#fafafa',
        fontFamily: 'inherit',
        fontWeight: '700px',
        fontSize: '22px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
    }}
    ${({ theme }) =>
    theme === 'tertiary' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#fafafa',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: '700px',
        fontSize: '20px',
        letterSpacing: '0.9px',
        lineHeight: 'normal',
        
    }}
    ${({ theme }) =>
    theme === 'tag' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#BDBDBD',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: '700px',
        fontSize: '18px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
    }}
`;