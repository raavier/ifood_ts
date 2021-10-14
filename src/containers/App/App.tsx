import React from 'react';
import Router  from '../../Router';
import { createBrowserHistory } from "history";
import  GlobalContext  from "../../context/index";
import {
    MuiThemeProvider,
    createGenerateClassName,
    jssPreset,
    CssBaseline
  } from "@material-ui/core";
import theme from '../../style/theme';

export const history = createBrowserHistory();

function App(): JSX.Element {
  return (
    <div className="App">
        <MuiThemeProvider theme={theme}>
            <CssBaseline>
                <GlobalContext>
                    <Router></Router>
                </GlobalContext>
            </CssBaseline>
        </MuiThemeProvider>

    </div>
  );
}

export default App;
