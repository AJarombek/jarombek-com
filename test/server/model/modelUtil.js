/**
 * Utility functions used for testing Mongoose model obejcts.
 * @author Andrew Jarombek
 * @since 6/23/2019
 */

/**
 * Save a model to MongoDB that is expected to be valid
 * @param model Object representing a Mongoose model.
 * @return {Promise<void>}
 */
const saveValidModel = async (model) => {
    try {
        await model.save();
        return;
    } catch (ex) {
        console.log(ex);
    }

    // Should not reach this point
    expect(1 + 1).toBe(4);
};

/**
 * Save a model to MongoDB that is expected to be invalid
 * @param model Object representing a Mongoose model.
 * @return {Promise<void>}
 */
const saveInvalidModel = async (model) => {
    try {
        await model.save();
    } catch (ex) {
        console.log(ex);
        return;
    }

    // Should not reach this point
    expect(1 + 1).toBe(4);
};

export {saveInvalidModel, saveValidModel}