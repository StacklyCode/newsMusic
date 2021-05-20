import styled from '@emotion/styled';

const BACKGROUND = {
    base: '#1F1F24',
    none: 'none'
}

const RADIUS = {
    full: '100px',
    none: 'none'
}

export const Icon = styled.div`
    align-items: center;
    background: ${props => BACKGROUND[props.background]};
    border-radius: ${props => RADIUS[props.radius]};
    cursor: pointer;
    display: inline-flex;
    height: 45px;
    justify-content: center;
    user-select: none;
    width: 45px;
`;