/**
 * Helper class that holds the current state of a submitted form
 * @author Andrew Jarombek
 * @since 6/2/2018
 */
class SubmitStatus {
    static NONE = 0;
    static SUBMIT_VALID = 1;
    static SUBMIT_INVALID = 2;
    static SUBMIT_SUCCESS = 3;
    static SUBMIT_FAIL = 4;
}

export default SubmitStatus;