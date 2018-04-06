/**
 * Create a root component for the react application
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {hot} from 'react-hot-loader';
import Button from './Button';

import './App.scss';
import TitleImage from "./TitleImage";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jarombek-main">
                <div className="title-container">
                    <p className="title">Andrew Jarombek</p>
                </div>
                <p className="sub-title">Website Under Construction</p>
                <Button className="blog-button" color="primary">
                    BLOG
                </Button>
                <Button className="info-button" color="default">
                    INFO
                </Button>
                <TitleImage className="footer-icon" src="./assets/github.png" title="GITHUB"
                            link="https://github.com/AJarombek"/>
            </div>
        );
    }
}

// Enable Hot Module Replacement on this component
export default hot(module)(App);