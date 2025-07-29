/**
 * Code written statistics for CMake.
 * @author Andrew Jarombek
 * @since 11/17/2022
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "CMake"});

db.statistics.insertOne({
    name: "CMake",
    first_year: 2019,
    color: "#064f8e",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 51,
        /* 2020 */ 47,
        /* 2021 */ 200,
        /* 2022 */ 761,
        /* 2023 */ 721,
        /* 2024 */ 60,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 26,
        /* 2020 */ 37,
        /* 2021 */ 23,
        /* 2022 */ 18,
        /* 2023 */ 16,
        /* 2024 */ 22,
        /* 2025 */ 25,
    ]
});