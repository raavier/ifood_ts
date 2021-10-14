import React from "react";
import { useHistory } from "react-router";
import LogoFourFood from "../../images/logo-future-eats.svg";
import { useEffect } from "react";
import { LogoFutureEats, RectangleMain } from "./style";


function InitialScreen():JSX.Element{
const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push("/login")
        },3000)
    }, [])


    return(
        <RectangleMain>
            <LogoFutureEats src={LogoFourFood}  />
        </RectangleMain>
    )
}



export default InitialScreen

