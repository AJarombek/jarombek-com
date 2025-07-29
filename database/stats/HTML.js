/**
 * Code written statistics for HTML.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "HTML"});

db.statistics.insertOne({
    name: "HTML",
    first_year: 2016,
    color: "#d84a24",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 1413,
        /* 2017 */ 2289,
        /* 2018 */ 10833,
        /* 2019 */ 4855,
        /* 2020 */ 2484,
        /* 2021 */ 4988,
        /* 2022 */ 3009,
        /* 2023 */ 405,
        /* 2024 */ 180,
        /* 2025 */ 195,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 5,
        /* 2017 */ 6,
        /* 2018 */ 2,
        /* 2019 */ 3,
        /* 2020 */ 7,
        /* 2021 */ 6,
        /* 2022 */ 6,
        /* 2023 */ 20,
        /* 2024 */ 18,
        /* 2025 */ 12,
    ]
});
