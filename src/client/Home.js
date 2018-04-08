/**
 * Create a root component for the react application
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {hot} from 'react-hot-loader';
import {Link} from 'react-router-dom';

import Button from './Button';
import TitleImage from "./TitleImage";

import './Home.scss';

class Home extends React.Component {

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
                <Link to="/blog" className="blog-button">
                    <Button color="primary">
                        BLOG
                    </Button>
                </Link>
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
export default hot(module)(Home);