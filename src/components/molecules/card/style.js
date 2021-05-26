import styled from '@emotion/styled';

export const Card = styled.div`
    width: 305px;
    height: 360px;
    border: 1px solid transparent;
    padding: 5px 5px;
    line-height: 0px;
    

    img {
        width: 290px;
        height: 160px;
    }
    
`;

export const CardNews = styled.div`
    width: 290px;
    height: 170px;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    background-color: #1F1F24;
    border-radius: 0px 0px 10px 10px;

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
        
    }
    
`;