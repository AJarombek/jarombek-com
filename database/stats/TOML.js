/**
 * Code written statistics for TOML.
 * @author Andrew Jarombek
 * @since 11/11/2023
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "TOML"});

db.statistics.insertOne({
    name: "TOML",
    first_year: 2019,
    color: "#202020",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 12,
        /* 2020 */ 396,
        /* 2021 */ 160,
        /* 2022 */ 106,
        /* 2023 */ 730,
        /* 2024 */ 518,
        /* 2025 */ 70,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 30,
        /* 2020 */ 20,
        /* 2021 */ 24,
        /* 2022 */ 28,
        /* 2023 */ 14,
        /* 2024 */ 11,
        /* 2025 */ 17,
    ]
});
