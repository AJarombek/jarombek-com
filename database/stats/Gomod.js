/**
 * Code written statistics for Go.mod.
 * @author Andrew Jarombek
 * @since 9/2/2023
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Go.mod"});

db.statistics.insertOne({
    name: "Go.mod",
    first_year: 2020,
    color: "#05a2cc",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 34,
        /* 2021 */ 80,
        /* 2022 */ 654,
        /* 2023 */ 717,
        /* 2024 */ 6,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 40,
        /* 2021 */ 27,
        /* 2022 */ 20,
        /* 2023 */ 17,
        /* 2024 */ 29,
        /* 2025 */ 25,
    ]
});
