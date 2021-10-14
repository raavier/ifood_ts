import styled from "styled-components";
export const RectangleMain = styled.div`
max-width: 420px;
    /*iPhone 6/7/8*/
height: 667px;
    /*iPhone X*/
@media (height: 812px){
    height: 812px;
}
    /*Galaxy S5*/
@media (height: 640px){
    height: 640px;
}
    /*iPhone 6/7/8 Plus*/
@media (height: 736px){
    height: 736px;
}
    /*iPhone 5/SE*/
@media (height: 568px){
    height: 568px;
}
background-color: #e8222e;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const LogoFutureEats = styled.img `
width: 126px;
height: 65px;
object-fit: contain;

`;
