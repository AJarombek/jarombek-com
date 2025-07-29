/**
 * Code written statistics for SQL.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "SQL"});

db.statistics.insertOne({
    name: "SQL",
    first_year: 2015,
    color: "#086abe",
    lines: [
        /* 2014 */ null,
        /* 2015 */ 32,
        /* 2016 */ 820,
        /* 2017 */ 1019,
        /* 2018 */ 364,
        /* 2019 */ 2622,
        /* 2020 */ 1790,
        /* 2021 */ 2442,
        /* 2022 */ 2409,
        /* 2023 */ 1111,
        /* 2024 */ 841,
        /* 2025 */ 105,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ 5,
        /* 2016 */ 8,
        /* 2017 */ 11,
        /* 2018 */ 9,
        /* 2019 */ 9,
        /* 2020 */ 11,
        /* 2021 */ 10,
        /* 2022 */ 10,
        /* 2023 */ 11,
        /* 2024 */ 8,
        /* 2025 */ 15,
    ]
});
