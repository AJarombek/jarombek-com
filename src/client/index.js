/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '@babel/polyfill';
import { createGlobalStyle } from 'styled-components';

import Home from './Home';
import Blog from './Blog';
import Verify from './Verify';
import Unsub from "./Unsub";
import gs from "./globalStyles";
import BlogList from "./BlogList";
import Resume from "./Resume";
import Statistics from './Statistics';

let globalStyles = '';

if (process.env.NODE_ENV === 'development') {
    globalStyles = gs.dev;
} else {
    globalStyles = gs.prod;
}

window.React = React;

const RoutedApp = () => {

    const GlobalStyle = createGlobalStyle`${globalStyles}`;

    return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog/:name" render={(props) => <Blog {...props} {...window.__STATE__}/>}/>
            <Route path="/blog" render={(props) => <BlogList {...props} {...window.__STATE__}/>}/>
            <Route path="/resume" component={Resume} />
            <Route path="/stats" component={Statistics} />
            <Route path="/verify/:code" component={Verify}/>
            <Route path="/unsub/:code" component={Unsub} />
            <Route component={Home}/>
            <GlobalStyle/>
        </Switch>
    </Router>
)};

render(
    <RoutedApp />,
    document.getElementById('react-container')
);

export default RoutedApp;