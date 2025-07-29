/**
 * Code written statistics for reStructuredText.
 * @author Andrew Jarombek
 * @since 9/18/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "reStructuredText"});

db.statistics.insertOne({
    name: "reStructuredText",
    first_year: 2019,
    color: "#000000",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 342,
        /* 2020 */ 438,
        /* 2021 */ 437,
        /* 2022 */ 205,
        /* 2023 */ 50,
        /* 2024 */ 0,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 21,
        /* 2020 */ 19,
        /* 2021 */ 17,
        /* 2022 */ 26,
        /* 2023 */ 29,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});
