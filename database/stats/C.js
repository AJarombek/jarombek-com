/**
 * Code written statistics for C.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "C"});

db.statistics.insertOne({
    name: "C",
    first_year: 2015,
    color: "#01427c",
    lines: [
        /* 2014 */ null,
        /* 2015 */ 630,
        /* 2016 */ 379,
        /* 2017 */ 271,
        /* 2018 */ 196,
        /* 2019 */ 527,
        /* 2020 */ 82,
        /* 2021 */ 413,
        /* 2022 */ 3801,
        /* 2023 */ 861,
        /* 2024 */ 439,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ 3,
        /* 2016 */ 10,
        /* 2017 */ 14,
        /* 2018 */ 22,
        /* 2019 */ 16,
        /* 2020 */ 31,
        /* 2021 */ 18,
        /* 2022 */ 5,
        /* 2023 */ 12,
        /* 2024 */ 12,
        /* 2025 */ 25,
    ]
});
