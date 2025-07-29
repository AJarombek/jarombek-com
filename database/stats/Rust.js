/**
 * Code written statistics for Rust.
 * @author Andrew Jarombek
 * @since 7/4/2025
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Rust"});

db.statistics.insertOne({
    name: "Rust",
    first_year: 2021,
    color: "#dea584",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ null,
        /* 2021 */ 236,
        /* 2022 */ 394,
        /* 2023 */ 0,
        /* 2024 */ 0,
        /* 2025 */ 512,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ null,
        /* 2021 */ 21,
        /* 2022 */ 24,
        /* 2023 */ 35,
        /* 2024 */ 30,
        /* 2025 */ 8,
    ]
});