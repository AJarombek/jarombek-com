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
import FeatureList from "./FeatureList";
import websiteFeatures from "./websiteFeatures";

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="jarbek-home">
                <Helmet>
                    <title>Andrew Jarombek</title>
                    <meta name="author" content="Andrew Jarombek" />
                    <meta name="description"
                          content={`Andrew Jarombek's Personal Website and
                            Software Development Blog`} />
                    <link rel="canonical" href="https://jarombek.com" />
                    <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                </Helmet>
                <div className="jarbek-home-main">
                    <div className="jarbek-home-main-overlay">
                        <div className="jarbek-home-title-container">
                            <h1 className="jarbek-home-title">Andrew Jarombek</h1>
                        </div>
                        <p className="jarbek-home-sub-title">Software Development Hub</p>
                        <Link to="/blog" className="jarbek-home-blog-button">
                            <Button activeColor="primary" passiveColor="primary">
                                BLOG
                            </Button>
                        </Link>
                        <div className="jarbek-home-arrow">
                        <TitleImage src="./assets/down.png" title="" link="#features"/>
                        </div>
                    </div>
                </div>
                <div className="jarbek-home-break">
                    <p>Developing Software Since <strong>Summer 2015</strong></p>
                </div>
                <FeatureList id="features" featureList={websiteFeatures} />
                <TitleImage className="footer-icon" src="./assets/github.png" title="GITHUB"
                            link="https://github.com/AJarombek"/>
            </div>
        );
    }
}

// Enable Hot Module Replacement on this component
export default hot(module)(Home);