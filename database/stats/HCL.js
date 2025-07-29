/**
 * Code written statistics for HCL.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "HCL"});

db.statistics.insertOne({
    name: "HCL",
    first_year: 2018,
    color: "#000000",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ 3801,
        /* 2019 */ 4059,
        /* 2020 */ 8578,
        /* 2021 */ 5673,
        /* 2022 */ 2864,
        /* 2023 */ 2514,
        /* 2024 */ 1173,
        /* 2025 */ 3610,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ 5,
        /* 2019 */ 7,
        /* 2020 */ 5,
        /* 2021 */ 4,
        /* 2022 */ 7,
        /* 2023 */ 8,
        /* 2024 */ 6,
        /* 2025 */ 2,
    ]
});
