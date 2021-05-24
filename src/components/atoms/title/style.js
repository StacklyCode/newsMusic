import styled from '@emotion/styled';

const SIZES = {
    titleXLarge: '40px',
    titleLarge: '24px',
    titleXMedium: '22px',
    titleMedium: '20px',
    titleXSmall: '18px',
    titleSmall: '16px',
    subtitleLarge: '14px',
    subtitleMedium: '12px',
    subtitleSmall: '10px'
}

const BOLD = {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900'
}

const COLOR = {
    white: '#fafafa',
    lightWhite: '#f8f9fa',
    lightGrey: '#dee2e6',
    mediumGrey: '#cccccc',
    grey: '#8B8E90',
    lightBlue: '#e7ecef',
    extraLightBlue: '#f6fff8',
    blue: '#34A7FB'
}

const ALIGN = {
    center: 'center',
    left: 'left',
    right: 'right',
    justify: 'justify',
    start: 'start',
    end: 'end',
    initial: 'initial'
}

export const Title = styled.h1`
    font-size: ${props => SIZES[props.size]};
    color: ${props => COLOR[props.color]};
    font-weight: ${props => BOLD[props.bold]};
    font-family: sans-serif;
    line-height: 0.7px;
    text-align: ${props => ALIGN[props.align]};
`;
