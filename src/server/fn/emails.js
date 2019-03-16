/**
 * Module to communicate with AWS Lambda functions that relate to sending emails
 * @author Andrew Jarombek
 * @since 6/14/2018
 */

const fetch = require('isomorphic-fetch');

/**
 * Send a welcome email after a user subscribes
 * @param to - recipient email address
 * @param verify - verification code
 * @param unsub - unsubscribe code
 */
exports.sendWelcomeEmail = function sendWelcomeEmail(to, verify, unsub) {
    fetch(
        `https://fn.jarombek.com/v1/welcome-email/${to}`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                verify,
                unsub
            })
        }
    );
};

module.exports = exports;