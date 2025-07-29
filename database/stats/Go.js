/**
 * Code written statistics for Go.
 * @author Andrew Jarombek
 * @since 9/18/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Go"});

db.statistics.insertOne({
    name: "Go",
    first_year: 2020,
    color: "#05a2cc",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 818,
        /* 2021 */ 1553,
        /* 2022 */ 6665,
        /* 2023 */ 6940,
        /* 2024 */ 1705,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 15,
        /* 2021 */ 12,
        /* 2022 */ 2,
        /* 2023 */ 3,
        /* 2024 */ 2,
        /* 2025 */ 25,
    ]
});
