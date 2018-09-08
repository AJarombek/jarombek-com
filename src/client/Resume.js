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

class Resume extends React.Component {

    constructor(props) {
        super(props);
        console.debug('Inside Resume constructor');
        this.state = {};
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    };

    /**
     * Render the JSX
     */
    render() {
        const {subscribing} = this.state;
        console.debug('Inside Resume Render');

        return (
            <WebsiteTemplate subscribeAction={ () => this.setState({subscribing: true}) }>
                <div className="jarbek-reume">
                    <Helmet>
                        <title>Andrew Jarombek Resume</title>
                        <meta name="author" content="Andrew Jarombek" />
                        <meta name="description" content="Andrew Jarombek Resume" />
                        <link rel="canonical" href={`https://jarombek.com/resume`} />
                        <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                    </Helmet>
                    <div className="jarbek-resume-timeline">
                        <Timeline />
                    </div>
                    <div className="jarbek-resume-prev">
                        <TitleImage src="./assets/down.png" title="" link="/resume"/>
                    </div>
                    <div className="jarbek-resume-content">

                    </div>
                    <div className="jarbek-resume-next">
                        <TitleImage src="./assets/down.png" title="" link="/resume"/>
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