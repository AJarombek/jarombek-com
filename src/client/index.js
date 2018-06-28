/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'babel-polyfill';
import { injectGlobal } from 'styled-components';

import Home from './Home';
import Blog from './Blog';
import Verify from './Verify';
import Unsub from "./Unsub";

if (process.env.NODE_ENV === 'development') {
    injectGlobal`
      @font-face {
        font-family: Sylexiad;
        font-weight: normal;
        src: url("http://localhost:8080/client/assets/SylexiadSansThin.ttf") format("truetype");
      }
    
      @font-face {
        font-family: Sylexiad-Bold;
        font-weight: bold;
        src: url("http://localhost:8080/client/assets/SylexiadSansThin-Bold.ttf") 
            format("truetype");
      }
    
      @font-face {
        font-family: Dyslexie;
        font-weight: bold;
        src: url("http://localhost:8080/client/assets/dyslexie-bold.ttf") 
            format("truetype");
      }
    
      @font-face {
        font-family: Fantasque-Bold;
        font-weight: bold;
        src: url("http://localhost:8080/client/assets/FantasqueSansMono-Bold.ttf") 
            format("truetype");
      }
    `;
} else {
    injectGlobal`
      @font-face {
        font-family: Sylexiad;
        font-weight: normal;
        src: url("https://asset.jarombek.com/fonts/SylexiadSansThin.ttf") format("truetype");
      }
    
      @font-face {
        font-family: Sylexiad-Bold;
        font-weight: bold;
        src: url("https://asset.jarombek.com/fonts/SylexiadSansThin-Bold.ttf") format("truetype");
      }
    
      @font-face {
        font-family: Dyslexie;
        font-weight: bold;
        src: url("https://asset.jarombek.com/fonts/dyslexie-bold.ttf") format("truetype");
      }
    
      @font-face {
        font-family: Fantasque-Bold;
        font-weight: bold;
        src: url("https://asset.jarombek.com/fonts/FantasqueSansMono-Bold.ttf") format("truetype");
      }
    `;
}

// import './index.scss';

window.React = React;

const RoutedApp = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog/:name" render={(props) => <Blog {...props} {...window.__STATE__}/>}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/verify/:code" component={Verify}/>
            <Route path="/unsub/:code" component={Unsub} />
            <Route component={Home}/>
        </Switch>
    </Router>
);

render(
    <RoutedApp />,
    document.getElementById('react-container')
);

export default RoutedApp;