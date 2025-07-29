/**
 * Metadata for the coding statistics.
 * @author Andrew Jarombek
 * @since 9/18/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statisticsMeta.remove({});

db.statisticsMeta.insertOne({
    updated: new Date('2025-07-04T12:00:00')
});
