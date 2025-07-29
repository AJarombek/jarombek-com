/**
 * Code written statistics for C++.
 * @author Andrew Jarombek
 * @since 9/18/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "C++"});

db.statistics.insertOne({
    name: "C++",
    color: "#005195",
    first_year: 2016,
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 161,
        /* 2017 */ 0,
        /* 2018 */ 233,
        /* 2019 */ 181,
        /* 2020 */ 83,
        /* 2021 */ 756,
        /* 2022 */ 1662,
        /* 2023 */ 2810,
        /* 2024 */ 0,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 15,
        /* 2017 */ 23,
        /* 2018 */ 21,
        /* 2019 */ 24,
        /* 2020 */ 30,
        /* 2021 */ 14,
        /* 2022 */ 12,
        /* 2023 */ 4,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});
