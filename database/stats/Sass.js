/**
 * Code written statistics for Sass.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Sass"});

db.statistics.insertOne({
    name: "Sass",
    first_year: 2017,
    color: "#c36192",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 163,
        /* 2018 */ 4198,
        /* 2019 */ 4468,
        /* 2020 */ 1516,
        /* 2021 */ 510,
        /* 2022 */ 53,
        /* 2023 */ 292,
        /* 2024 */ 30,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 15,
        /* 2018 */ 4,
        /* 2019 */ 4,
        /* 2020 */ 13,
        /* 2021 */ 16,
        /* 2022 */ 29,
        /* 2023 */ 21,
        /* 2024 */ 23,
        /* 2025 */ 25,
    ]
});
