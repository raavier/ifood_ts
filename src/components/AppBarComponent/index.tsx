import React, { ReactElement } from "react";
import { StyledAppBar, StyledBackImg, Title } from "./style";
import BackButton from "../../images/back.svg";
import theme from "../../style/theme";
import { useHistory } from "react-router";


export function AppBarComponent(props:any):ReactElement{
    const history = useHistory()
    return (
        <StyledAppBar color='primary' theme={theme}>
          {props.imageDisplay && <StyledBackImg src={BackButton} onClick={() => history.goBack()} />}
          <Title>{props.title}</Title>
        </StyledAppBar>
    );
  }

  export default AppBarComponent;
