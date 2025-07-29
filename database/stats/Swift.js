/**
 * Code written statistics for Swift.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Swift"});

db.statistics.insertOne({
    name: "Swift",
    first_year: 2017,
    color: "#e44d35",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 10726,
        /* 2018 */ 698,
        /* 2019 */ 2208,
        /* 2020 */ 47,
        /* 2021 */ 3654,
        /* 2022 */ 2479,
        /* 2023 */ 2640,
        /* 2024 */ 277,
        /* 2025 */ 848,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 2,
        /* 2018 */ 12,
        /* 2019 */ 12,
        /* 2020 */ 36,
        /* 2021 */ 8,
        /* 2022 */ 9,
        /* 2023 */ 6,
        /* 2024 */ 13,
        /* 2025 */ 3,
    ]
});
