/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'babel-polyfill';

import Home from './Home';
import Blog from './Blog';
import Verify from './Verify';
import Unsub from "./Unsub";

window.React = React;

const RoutedApp = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog/:name" component={Blog}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/verify/:code" component={Verify}/>
            <Route path="/unsub/:code" component={Unsub}/>
            <Route component={Home}/>
        </Switch>
    </Router>
);

render(
    <RoutedApp />,
    document.getElementById('react-container')
);

export default RoutedApp;