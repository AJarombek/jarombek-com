/**
 * Verify Component
 * @author Andrew Jarombek
 * @since 6/16/2018
 */

import React from 'react';

import './Verify.scss';
import PropTypes from "prop-types";
import VerifyStatus from "./status/VerifyStatus";
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

    componentDidMount() {
        console.info("Inside Verify ComponentDidMount");

        const {code} = this.props.match.params;

        if (code) {

            console.info(`Verifying user with code: ${code}`);
            this.setState({status: VerifyStatus.VERIFYING});
        } else {
            console.info('No Code Supplied.');
            this.setState({status: VerifyStatus.NO_CODE});
        }
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
                                    <p>&#x2718; Verification Failure!</p>
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