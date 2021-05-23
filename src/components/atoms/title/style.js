import styled from '@emotion/styled';

export const Title = styled.h1`
    ${({ size }) =>
    size === 'titleLarge' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#fafafa',
        fontFamily: 'inherit',
        fontWeight: '700',
        fontSize: '40px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
    }}
    ${({ size }) =>
    size === 'titleXMedium' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#E4E4E5',
        fontFamily: 'inherit',
        fontWeight: '700',
        fontSize: '24px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
    }}
    ${({ size }) =>
    size === 'titleMedium' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#fafafa',
        fontFamily: 'inherit',
        fontWeight: '700',
        fontSize: '22px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
    }}
    ${({ size }) =>
    size === 'titleSmall' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#fafafa',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: '700',
        fontSize: '20px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'

    }}
    ${({ size }) =>
    size === 'subtitleXMedium' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#E4E4E5',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: '500',
        fontSize: '22px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
        
    }}
    ${({ size }) =>
    size === 'subtitleLMedium' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#E4E4E5',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: '300',
        fontSize: '22px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
        
    }}
    ${({ size }) =>
    size === 'subtitleMedium' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#A8A8A8',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: '600',
        fontSize: '18px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
        
    }}
    
    ${({ size }) =>
    size === 'subtitleSmall' && {
        alignItems: 'center',
        border: '1px solid transparent',
        display: 'block',
        color: '#BDBDBD',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: '500',
        fontSize: '18px',
        letterSpacing: '0.9px',
        lineHeight: 'normal'
    }}
`;
