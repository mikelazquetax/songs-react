import styled from "styled-components";

export const MyHeader = styled.header`
    background-color: ${({theme}) => theme.palette.green};
    margin: auto -16px;
    padding: 16px 32px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    align-items: center

`;

export const TituloPrincipal = styled.h1`
    color: ${({theme}) => theme.palette.black}
`;

