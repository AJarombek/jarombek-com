/**
 * Helper class that holds the current state of verifying/un-subscribing a user
 * @author Andrew Jarombek
 * @since 6/16/2018
 */
class VerifyStatus {

    /* No code can be found to perform a verify or remove a subscription */
    static NO_CODE = 0;

    /* In the process of verifying a user */
    static VERIFYING = 1;

    /* A user was either successfully or unsuccessfully verified */
    static VERIFY_SUCCESS = 2;
    static VERIFY_FAILURE = 3;

    /* In the process of unsubscribing a user */
    static UNSUBSCRIBING = 4;

    /* A user was either successfully or unsuccessfully unsubscribed */
    static UNSUBSCRIBE_SUCCESS = 5;
    static UNSUBSCRIBE_FAILURE = 6;

}

export default VerifyStatus;