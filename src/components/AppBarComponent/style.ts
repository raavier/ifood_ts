import styled from 'styled-components';
import AppBar from "@material-ui/core/AppBar";

export const Title = styled.p`
width: 300px;
font-family: Roboto;
font-size: 16px;
letter-spacing: -0.39px;
text-align: center;
color: #ffffff;
`;


export const StyledAppBar = styled(AppBar)`
  width: 360px;
  height: 44px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #e8222e;
  display: flex;
  padding: 0px 10px;
  flex-direction: row !important; /* tem alguma coisa que estava barrando o flex direction */
  justify-content: space-around;
  align-items: center;
  position: fixed !important;
  top: 0;
`;

export const StyledBackImg = styled.img`
  margin: 0;
`;
