/**
 * Create a root component for the react application
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {hot} from 'react-hot-loader';
import Button from './Button';

import './App.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="title-container">
                    <p className="title">Andrew Jarombek</p>
                </div>
                <p className="sub-title">Website Under Construction</p>
                <Button color="primary">
                    BLOG
                </Button>
                <Button color="default">
                    INFO
                </Button>
            </div>
        );
    }
}

// Enable Hot Module Replacement on this component
export default hot(module)(App);