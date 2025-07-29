/**
 * Code written statistics for JSON.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "JSON"});

db.statistics.insertOne({
    name: "JSON",
    first_year: 2015,
    color: "#202020",
    lines: [
        /* 2014 */ null,
        /* 2015 */ 32,
        /* 2016 */ 820,
        /* 2017 */ 1019,
        /* 2018 */ 364,
        /* 2019 */ 1635,
        /* 2020 */ 2372,
        /* 2021 */ 1498,
        /* 2022 */ 1036,
        /* 2023 */ 512,
        /* 2024 */ 757,
        /* 2025 */ 164,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ 8,
        /* 2016 */ 9,
        /* 2017 */ 9,
        /* 2018 */ 15,
        /* 2019 */ 14,
        /* 2020 */ 8,
        /* 2021 */ 13,
        /* 2022 */ 16,
        /* 2023 */ 18,
        /* 2024 */ 9,
        /* 2025 */ 13,
    ]
});
