/**
 * Data Access Object for Language Statistics
 * @author Andrew Jarombek
 * @since 9/16/2019
 */

import Statistics from "../model/statistics";

class StatisticsDao {

    /**
     * Get all the language statistics in the MongoDB database.
     * @return {Promise<*>} a list of statistics from MongoDB.
     */
    static getAll = async () => {
        return await Statistics.find().exec();
    };

    /**
     * Make a findOne() query on the Stats collection in MongoDB with a specific language name.
     * @param name - the name of a language to search for statistics about.
     * @return {Promise<*>} a single statistics object from MongoDB.
     */
    static getByLanguageName = async (name) => {
        return await Statistics.findOne({name}).exec();
    };

}

export default StatisticsDao;