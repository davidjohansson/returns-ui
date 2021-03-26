import * as React from 'react';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Returns from "./Returns";

export default function MyApp() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </Head>

        <div className="wrapper">
          <h1>Application</h1>
          <BrowserRouter>
            <nav>
              <Link to="/returns">Returns</Link>
            </nav>
            <Switch>
              <Route path="/returns">
                <Returns/>
              </Route>
            </Switch>

          </BrowserRouter>
        </div>
      </ThemeProvider>
  );
}

