import styled from '@emotion/styled';

const COLORS = {
    base: '#ffff',
    white: '#fafafa',
    grey: '#e4e4e5'
}

const SIZES = {
    xs: '20px',
    sm: '22px',
    md: '24px',
    lg: '40px',
    xl: '60px'
}

const WEIGHT = {
    semibold: '600',
    bold: '700'
}

export const Title = styled.h1`
    align-items: center;
    border: 0px solid transparent;
    color: ${props => COLORS[props.color]};
    display: block;
    font-family: inherit;
    font-weight: ${props => WEIGHT[props.weight]};
    font-size: ${props => SIZES[props.size]};
    letter-spacing: 0.9px;
    line-height: normal;
`;