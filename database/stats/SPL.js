/**
 * Code written statistics for SPL.
 * @author Andrew Jarombek
 * @since 7/6/2022
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "SPL"});

db.statistics.insertOne({
    name: "SPL",
    first_year: 2020,
    color: "#65a61e",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 189,
        /* 2021 */ 26,
        /* 2022 */ 1202,
        /* 2023 */ 28,
        /* 2024 */ 8,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 25,
        /* 2021 */ 32,
        /* 2022 */ 14,
        /* 2023 */ 31,
        /* 2024 */ 28,
        /* 2025 */ 25,
    ]
});
