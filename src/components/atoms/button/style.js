import styled from '@emotion/styled';

export const StyledButton = styled.button`
    ${({ color }) => 
    color === "default" && {
        backgroundColor: '#2D91DA',
        border: '1px solid transparent',
        borderRadius: "10px",
        color: "#fafafa",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "16",
        fontWeight: "600",
        padding: "8px 16px",
        ":hover": {
            backgroundColor: '#2B8BD0',
        },
    }}
    ${({ color }) => 
    color === "linkers" && {
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        color: "#2D91DA",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "16",
        fontWeight: "600",
        letterSpacing: "",
        padding: "6px 12px",
        width: "106px",
        ":hover": {
            backgroundColor: '',
        },
    }}
    ${({ color }) => 
    color === "tag" && {
        backgroundColor: '#1F1F24',
        border: '1px solid transparent',
        borderRadius: '0px',
        color: "#fafafa",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "16",
        fontWeight: "500",
        letterSpacing: "",
        padding: "2px 6px",
        width: "100%",
        ":hover": {
            backgroundColor: '#1B1B20',
        },
    }}
    ${({ size }) => 
    size === "medium" && {
        backgroundColor: '#2D91DA',
        border: '1px solid transparent',
        borderRadius: "10px",
        color: "#fafafa",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "16",
        fontWeight: "700",
        padding: "10px 20px",
        ":hover": {
            backgroundColor: '#2B8BD0',
        },
    }}
    transition: transform 0.4s ease;
`;
