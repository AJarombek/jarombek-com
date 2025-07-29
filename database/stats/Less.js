/**
 * Code written statistics for Less.
 * @author Andrew Jarombek
 * @since 9/18/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Less"});

db.statistics.insertOne({
    name: "Less",
    first_year: 2020,
    color: "#193151",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 1224,
        /* 2021 */ 34,
        /* 2022 */ 0,
        /* 2023 */ 0,
        /* 2024 */ 0,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ 14,
        /* 2021 */ 31,
        /* 2022 */ 33,
        /* 2023 */ 35,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});
