import styled from '@emotion/styled';

const ROUNDED = {
    xs: '4px',
    sm: '10px',
    md: '20px',
    none: 'none'
}

const HEIGHTS = {
    small: '120px',
    medium: '200px',
    large: '400px'
}

const WIDTHS = {
    xs: '120px',
    sm: '260px',
    md: '360px',
    large: '1000px'
}

export const Image = styled.div`
    align-items: center;
    border-radius: ${props => ROUNDED[props.rounded]};
    display: block;
    height: ${props => HEIGHTS[props.height]};
    justify-content: center;
    
    img {
        border-radius: ${props => ROUNDED[props.rounded]}; 
        filter: opacity(60%);
        height: ${props => HEIGHTS[props.height]};
        object-fit: cover;
        width: ${props => WIDTHS[props.width]}; 
    }

    transition: all 0.5s ease;
    width: ${props => WIDTHS[props.width]};
`;