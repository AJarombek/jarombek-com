/**
 * Code written statistics for TypeScript.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "TypeScript"});

db.statistics.insertOne({
    name: "TypeScript",
    first_year: 2017,
    color: "#2f72bb",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 133,
        /* 2018 */ 2375,
        /* 2019 */ 361,
        /* 2020 */ 11830,
        /* 2021 */ 23555,
        /* 2022 */ 6036,
        /* 2023 */ 11068,
        /* 2024 */ 1161,
        /* 2025 */ 269,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 17,
        /* 2018 */ 6,
        /* 2019 */ 19,
        /* 2020 */ 3,
        /* 2021 */ 1,
        /* 2022 */ 3,
        /* 2023 */ 2,
        /* 2024 */ 7,
        /* 2025 */ 11,
    ]
});
