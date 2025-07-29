/**
 * Code written statistics for CSS.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "CSS"});

db.statistics.insertOne({
    name: "CSS",
    first_year: 2016,
    color: "#0271b4",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 1223,
        /* 2017 */ 1654,
        /* 2018 */ 594,
        /* 2019 */ 653,
        /* 2020 */ 580,
        /* 2021 */ 280,
        /* 2022 */ 0,
        /* 2023 */ 10,
        /* 2024 */ 202,
        /* 2025 */ 610,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 6,
        /* 2017 */ 7,
        /* 2018 */ 13,
        /* 2019 */ 15,
        /* 2020 */ 16,
        /* 2021 */ 19,
        /* 2022 */ 33,
        /* 2023 */ 34,
        /* 2024 */ 17,
        /* 2025 */ 6,
    ]
});
