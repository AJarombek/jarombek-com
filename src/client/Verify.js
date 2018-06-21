/**
 * Verify Component
 * @author Andrew Jarombek
 * @since 6/16/2018
 */

import React from 'react';

import './Verify.scss';
import PropTypes from "prop-types";
import VerifyStatus from "./status/UserStatus";
import {Link} from 'react-router-dom';

import WebsiteTemplate from "./WebsiteTemplate";
import Loading from "./Loading";
import TitleImage from './TitleImage';

class Verify extends React.Component {

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
        console.info("Inside Verify ComponentDidMount");

        const {code} = this.props.match.params;

        if (code) {

            console.info(`Verifying user with code: ${code}`);
            this.setState({status: VerifyStatus.VERIFYING});

            // If the url of this component has a verification code, use it to try and verify
            // a user.
            Verify.verifyUser(code, this.baseUrl).then((status) => {
                console.info(status);

                // The outcome of the verification is dependent on the HTTP status code
                // of the response
                if (status === 200) {
                    this.setState({status: VerifyStatus.VERIFY_SUCCESS});
                } else {
                    this.setState({status: VerifyStatus.VERIFY_FAILURE});
                }
            }, (reason) => {
                console.error(reason);
                this.setState({status: VerifyStatus.VERIFY_FAILURE});
            });

        } else {
            console.info('No Code Supplied.');
            this.setState({status: VerifyStatus.NO_CODE});
        }
    }

    /**
     * Make a call to the API for user verification.  Return the status code from the
     * HTTP response
     * @param code - the verification code which will verify a user
     * @param baseUrl - the base of the url dependent on the environment
     * @return {Promise<number>}
     */
    static async verifyUser(code, baseUrl) {
        console.info(`PATCH ${baseUrl}/api/user/verify/${code}`);
        const response = await fetch(
            `${baseUrl}/api/user/verify/${code}`,
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
        console.debug(this.state);
        return (
            <WebsiteTemplate hideSubscribe={true}>
                <div className="jarombek-background jarombek-verify-background">
                    <div className="jarombek-verify">
                        <div>
                        { (status === VerifyStatus.NO_CODE) ?

                            <p className="jarombek-verify-content jarombek-verify-error">
                                &#x2718; No Verification Code!
                            </p>:
                            (status === VerifyStatus.VERIFY_FAILURE) ?

                                <div className="jarombek-verify-content jarombek-verify-error">
                                    <p className="jarombek-verify-title">
                                        &#x2718; Verification Failure!
                                    </p>
                                    <p className="jarombek-verify-thin-text">
                                        The verification code is invalid or was already used.
                                    </p>
                                </div>:
                                (status === VerifyStatus.VERIFY_SUCCESS) ?

                                    <p className="jarombek-verify-content jarombek-verify-success">
                                        &#x2714; Account Verified!
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

export default Verify;