/**
 * Resume Component
 * @author Andrew Jarombek
 * @since 9/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import WebsiteTemplate from './WebsiteTemplate';
import Modal from './Modal';
import Subscribe from "./Subscribe";
import TitleImage from "./TitleImage";
import Timeline from "./Timeline";
import resumeSections from "./resumeSections";

class Resume extends React.Component {

    constructor(props) {
        super(props);
        console.debug('Inside Resume constructor');

        const {title, content, languages, technologies} = resumeSections[0];

        this.state = {
            points: 5,
            position: 1,
            title,
            content,
            languages,
            technologies,
            subscribing: false
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    };

    /**
     * Render the JSX
     */
    render() {
        const {subscribing, points, position, title, content, languages, technologies} = this.state;
        console.debug('Inside Resume Render');

        return (
            <WebsiteTemplate subscribeAction={ () => this.setState({subscribing: true}) }>
                <div className="jarbek-resume">
                    <Helmet>
                        <title>Andrew Jarombek Resume</title>
                        <meta name="author" content="Andrew Jarombek" />
                        <meta name="description" content="Andrew Jarombek Resume" />
                        <link rel="canonical" href={`https://jarombek.com/resume`} />
                        <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                    </Helmet>
                    <div className="jarbek-resume-timeline">
                        <Timeline points={points} position={position} />
                    </div>
                    <div className="jarbek-resume-title">
                        <h5>{ title }</h5>
                    </div>
                    <div className="jarbek-resume-prev">
                        <TitleImage src="./assets/down-black.png" title="" link="/resume"/>
                    </div>
                    <div className="jarbek-resume-content">
                        <p>{ content }</p>
                    </div>
                    <div className="jarbek-resume-next">
                        <TitleImage src="./assets/down-black.png" title="" link="/resume"/>
                    </div>
                    <div className="jarbek-resume-tech">
                        <p className="jarbek-resume-tech-languages">
                            <strong>Languages:</strong> {
                                languages.reduce((acc, item, index) =>
                                    index ? `${acc}, ${item}`: `${item}`
                                )
                            }
                        </p>
                        <p className="jarbek-resume-tech-technologies">
                            <strong>Technologies:</strong> {
                                technologies.reduce((acc, item, index) =>
                                    index ? `${acc}, ${item}`: `${item}`
                                )
                            }
                        </p>
                    </div>
                </div>
                { (subscribing) ?
                    <Modal clickBackground={() => this.setState({subscribing: false})}>
                        <Subscribe exit={() => this.setState({subscribing: false})} />
                    </Modal> : null
                }
            </WebsiteTemplate>
        );
    }
}

export default Resume;