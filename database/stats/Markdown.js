/**
 * Code written statistics for Markdown.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Markdown"});

db.statistics.insertOne({
    name: "Markdown",
    first_year: 2016,
    color: "#000000",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 16,
        /* 2017 */ 133,
        /* 2018 */ 439,
        /* 2019 */ 3555,
        /* 2020 */ 5589,
        /* 2021 */ 2012,
        /* 2022 */ 1558,
        /* 2023 */ 1900,
        /* 2024 */ 1497,
        /* 2025 */ 848,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 18,
        /* 2017 */ 16,
        /* 2018 */ 14,
        /* 2019 */ 8,
        /* 2020 */ 6,
        /* 2021 */ 11,
        /* 2022 */ 13,
        /* 2023 */ 10,
        /* 2024 */ 3,
        /* 2025 */ 4,
    ]
});
