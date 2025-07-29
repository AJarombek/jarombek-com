/**
 * Code written statistics for Haskell.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Haskell"});

db.statistics.insertOne({
    name: "Haskell",
    first_year: 2018,
    color: "#616161",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ 873,
        /* 2019 */ 332,
        /* 2020 */ 0,
        /* 2021 */ 0,
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
        /* 2018 */ 11,
        /* 2019 */ 22,
        /* 2020 */ 42,
        /* 2021 */ 36,
        /* 2022 */ 33,
        /* 2023 */ 35,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});
