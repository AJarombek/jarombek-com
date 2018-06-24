/**
 * Unsub Component
 * @author Andrew Jarombek
 * @since 6/16/2018
 */

import React from 'react';

import './Unsub.scss';
import PropTypes from "prop-types";
import UnsubStatus from "./status/UserStatus";
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import WebsiteTemplate from "./WebsiteTemplate";
import Loading from "./Loading";
import TitleImage from './TitleImage';

class Unsub extends React.Component {

    constructor(props) {
        super(props);

        this.baseUrl = (process.env.NODE_ENV === 'production') ?
            'https://jarombek.com' :
            'http://localhost:8080';

        this.state = {};
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    };

    /**
     * Called when the component first mounts.  Here is where we should make setup API calls
     * and initialize the state
     */
    componentDidMount() {
        console.info("Inside Unsub ComponentDidMount");

        const {code} = this.props.match.params;

        if (code) {

            console.info(`Unsubscribing user with code: ${code}`);
            this.setState({status: UnsubStatus.UNSUBSCRIBING});

            // If the url of this component has an unsubscribe code, use it to try and
            // remove a users subscription.
            Unsub.unsubscribeUser(code, this.baseUrl).then((status) => {
                console.info(status);

                // The outcome of the un-subscription is dependent on the HTTP status code
                // of the response
                if (status === 200) {
                    this.setState({status: UnsubStatus.UNSUBSCRIBE_SUCCESS});
                } else {
                    this.setState({status: UnsubStatus.UNSUBSCRIBE_FAILURE});
                }
            }, (reason) => {
                console.error(reason);
                this.setState({status: UnsubStatus.UNSUBSCRIBE_FAILURE});
            });

        } else {
            console.info('No Code Supplied.');
            this.setState({status: UnsubStatus.NO_CODE});
        }
    }

    /**
     * Make a call to the API to remove a users subscription.  Return the status code
     * from the HTTP response
     * @param code - the un-subscription code which will unsubscribe a user
     * @param baseUrl - the base of the url dependent on the environment
     * @return {Promise<number>}
     */
    static async unsubscribeUser(code, baseUrl) {
        console.info(`PATCH ${baseUrl}/api/user/unsub/${code}`);
        const response = await fetch(
            `${baseUrl}/api/user/unsub/${code}`,
            {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({})
            }
        );

        console.info(response);
        const json = await response.json();
        console.info(`Updated User JSON: ${JSON.stringify(json)}`);

        return response.status;
    }

    render() {
        const {status} = this.state;
        const {code} = this.props.match.params;
        console.debug(this.state);
        return (
            <WebsiteTemplate hideSubscribe={true}>
                <div className="jarombek-background jarombek-verify-background">
                    <Helmet>
                        <title>Andrew Jarombek - User Unsubscription</title>
                        <meta name="author" content="Andrew Jarombek" />
                        <meta name="description"
                              content="Remove a user that was subscribed to the website" />
                        <link rel="canonical"
                              href={`https://jarombek.com/unsub/${code}`} />
                        <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                    </Helmet>
                    <div className="jarombek-verify">
                        <div>
                        { (status === UnsubStatus.NO_CODE) ?

                            <p className="jarombek-verify-content jarombek-verify-error">
                                &#x2718; No Unsubscription Code!
                            </p>:
                            (status === UnsubStatus.UNSUBSCRIBE_FAILURE) ?

                                <div className="jarombek-verify-content jarombek-verify-error">
                                    <p className="jarombek-verify-title">
                                        &#x2718; Unsubscription Failure!
                                    </p>
                                    <p className="jarombek-verify-thin-text">
                                        The unsubscription code is invalid or was already used.
                                    </p>
                                </div>:
                                (status === UnsubStatus.UNSUBSCRIBE_SUCCESS) ?

                                    <p className="jarombek-verify-content jarombek-verify-success">
                                        &#x2714; You are Unsubscribed.  Thank you
                                        for visiting my website!
                                    </p>:
                                    <Loading className="jarombek-verify-content" />
                        }
                        <Link className="jarombek-verify-footer" to='/'>
                            <TitleImage src="./assets/jarombek.png" title="HOME" />
                        </Link>
                        </div>
                    </div>
                </div>
            </WebsiteTemplate>
        );
    }
}

export default Unsub;