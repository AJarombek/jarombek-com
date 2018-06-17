/**
 * Helper class that holds the current state of a submitted form
 * @author Andrew Jarombek
 * @since 6/2/2018
 */
class SubmitStatus {

    /* The default state */
    static NONE = 0;

    /* The form has been submitted */
    static SUBMIT = 1;

    /* The form data has been validated or it is invalid */
    static SUBMIT_VALID = 2;
    static SUBMIT_INVALID = 3;

    /* The form action is successful, unsuccessful, or had no effect */
    static SUBMIT_SUCCESS = 4;
    static SUBMIT_FAIL = 5;
    static SUBMIT_NO_CHANGE = 6;
}

export default SubmitStatus;