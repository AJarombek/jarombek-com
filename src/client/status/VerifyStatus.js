/**
 * Helper class that holds the current state of verifying a user
 * @author Andrew Jarombek
 * @since 6/16/2018
 */
class VerifyStatus {

    static NO_CODE = 0;
    static VERIFYING = 1;
    static VERIFY_SUCCESS = 2;
    static VERIFY_FAILURE = 3;

}

export default VerifyStatus;