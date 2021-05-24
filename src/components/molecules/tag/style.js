import styled from '@emotion/styled';

const WIDHT = {
    tagXSmall: '297px',
    tagSmall: '330px',
    tagMedium: '360px',
    tagLarge: '914px'
}

const HEIGHT = {
    tagSmall: '130px',
    tagXSmall: '177px',
    tagMedium: '185px',
    tagLarge: '200px',
    tagXLarge: '210px'
}

const BORDER = {
    borderSmall: '5px',
    borderMedium: '10px',
    borderXMedium: '20px',
    borderLower: '0px 0px 10px 10px',
    borderXSLower: '0px 0px 7px 7px',
    borderXLower: '0px 0px 5px 5px',
    borderNone: '0px'
}

export const Tag = styled.article`
    width: ${props => WIDHT[props.width]};
    height: ${props => HEIGHT[props.height]};
    border: 0px solid transparent;
    flex-direction: row;
`;

export const TagContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    background-color: #1F1F24;
    
    border-radius: ${props => BORDER[props.border]};

    div {
        h1 {
            overflow: hidden;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            line-height: 21px;
            letter-spacing: 0.3px;
        }
        p {
            font-size: 11px;
            font-weight: 300;
            line-height: 21px;
            letter-spacing: 0.4px;
            color: #E4E4E5;
        }
        text-align: left;
        line-height: 21px;
    }
`;