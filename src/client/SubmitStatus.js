/**
 * Helper class that holds the current state of a submitted form
 * @author Andrew Jarombek
 * @since 6/2/2018
 */
class SubmitStatus {
    static NONE = 0;
    static SUBMIT = 1;
    static SUBMIT_VALID = 2;
    static SUBMIT_INVALID = 3;
    static SUBMIT_SUCCESS = 4;
    static SUBMIT_FAIL = 5;
}

export default SubmitStatus;