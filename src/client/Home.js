/**
 * Create a root component for the react application
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {hot} from 'react-hot-loader';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

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
                <Helmet>
                    <title>Andrew Jarombek</title>
                    <meta name="author" content="Andrew Jarombek" />
                    <meta name="description"
                          content={`Andrew Jarombek's Personal Website and
                            Software Development Blog`} />
                    <meta name="google-site-verification"
                          content="axpbkHOqG9cnq6gACXKtvjaAbcEvsQ_01zoGQcA3y_M" />
                    <link rel="canonical" href="https://jarombek.com" />
                    <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                </Helmet>
                <div className="title-container">
                    <h1 className="title">Andrew Jarombek</h1>
                </div>
                <p className="sub-title">Website Under Construction</p>
                <Link to="/blog" className="blog-button">
                    <Button activeColor="primary">
                        BLOG
                    </Button>
                </Link>
                <Button className="info-button" activeColor="default">
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