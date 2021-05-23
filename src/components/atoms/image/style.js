import styled from '@emotion/styled';

export const Image = styled.div`
    align-items: center;
    justify-content: center;

    ${({ theme }) =>
    theme && {
        filter: 'opacity(60%)',
 
    }}
    
    img {
        ${({ radius }) =>
        radius === 'max' && {
            borderRadius: '100px'
        }}
        ${({ radius }) =>
        radius === 'min' && {
            borderRadius: '10px'
        }}
        object-fit: cover;
    }

    transition: all 0.5s ease;
`;
