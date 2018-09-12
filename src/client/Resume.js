/**
 * Resume Component
 * @author Andrew Jarombek
 * @since 9/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import WebsiteTemplate from './WebsiteTemplate';
import Modal from './Modal';
import Subscribe from "./Subscribe";
import TitleImage from "./TitleImage";
import Timeline from "./Timeline";
import resumeSections from "./resumeSections";
import queryString from "query-string";

class Resume extends React.Component {

    constructor(props) {
        super(props);
        console.debug('Inside Resume constructor');

        const {title, content, languages, technologies} = resumeSections[0];

        const points = props.points || 5;
        const position = props.position || 1;

        this.state = {
            points,
            position,
            title,
            content,
            languages,
            technologies,
            subscribing: false
        };
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object,
        points: PropTypes.number,
        position: PropTypes.number
    };

    /**
     *
     */
    componentWillMount() {
        this.initResumeContent(this.props);
    }

    /**
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.initResumeContent(nextProps);
    }

    /**
     *
     * @param props
     */
    initResumeContent(props) {
        const {page} = queryString.parse(props.location.search);
        const resumePage = +page || 1;

        const {title, content, languages, technologies} = resumeSections[resumePage - 1];

        this.setState({
            position: resumePage,
            title,
            content,
            languages,
            technologies
        });
    }

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
                        <Timeline points={+points} position={+position} />
                    </div>
                    <div className="jarbek-resume-title">
                        <h5>{ title }</h5>
                    </div>
                    { +position !== 1 ?
                        <Link className="jarbek-resume-prev" to={`/resume?page=${position - 1}`}>
                            <TitleImage src="./assets/down-black.png" title="" />
                        </Link>: null
                    }
                    <div className="jarbek-resume-content">
                        <div>{ content }</div>
                    </div>
                    { +position !== +points ?
                        <Link className="jarbek-resume-next" to={`/resume?page=${position + 1}`}>
                            <TitleImage src="./assets/down-black.png" title="" />
                        </Link>: null
                    }
                    <div className="jarbek-resume-tech">
                        { languages.length ?
                            <p className="jarbek-resume-tech-languages">
                                <strong>Languages:</strong>
                                {languages.reduce((acc, item, index) =>
                                    index ? `${acc}, ${item}`: `${item}`
                                )}
                            </p>: null
                        }
                        {technologies.length ?
                            <p className="jarbek-resume-tech-technologies">
                                <strong>Technologies:</strong>
                                {technologies.reduce((acc, item, index) =>
                                    index ? `${acc}, ${item}` : `${item}`
                                )}
                            </p>: null
                        }
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