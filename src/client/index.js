/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import {render} from 'react-dom';
import Home from './Home';
import Blog from './Blog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

window.React = React;

const RoutedApp = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog}/>
            <Route component={Home}/>
        </Switch>
    </Router>
);

render(
    <RoutedApp />,
    document.getElementById('react-container')
);