import React, { useState, useContext } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FourFood from "../../images/logo-future-eats-invert.svg";

import {ImageLogo, useStyles} from "./style"
import UserContext from "../../context/user";
import { userLogin } from "../../actions/user";
import { useHistory } from "react-router";
/*
import express from "express";
const router = express.Router() */

export function LoginScreen():JSX.Element {
    const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [email, setEmail] = useState("")

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [password, setPassword] = useState("")

    const {setState: setGlobalState } =useContext(UserContext)

    const handleInputEmail = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(event.target.value);
  };


    const handleInputPassword = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setPassword(event.target.value);
  };

 // const history = useHistory()
 // MouseEventHandler<HTMLButtonElement>
    const handleOnSubmit =async (event:React.MouseEvent<HTMLButtonElement>):Promise<void> =>{
        event.preventDefault()
        setGlobalState({email,password})
    const dataUser = await userLogin(email,password)
    if (dataUser) {history.push("/feed")
    }
  }


const classes = useStyles()
    return (
      <div>
        <ImageLogo>
          <img src={FourFood}/>
        </ImageLogo>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                placeholder="email@email.com"
                autoComplete="email"
                autoFocus
                onChange={handleInputEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                placeholder="Mínimo 6 caracteres"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleInputPassword}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ background:"#e8222e", color: '#FFFFFF'}}
                className={classes.submit}
                onClick={handleOnSubmit}
              >
                Entrar
              </Button>
            </form>

            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Link   variant="body2" color="inherit">
                  Não possui cadastro? Clique aqui.
                </Link>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    )
}



