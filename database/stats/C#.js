/**
 * Code written statistics for C#.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "C#"});

db.statistics.insertOne({
    name: "C#",
    first_year: 2018,
    color: "#6a1577",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ 325,
        /* 2019 */ 4206,
        /* 2020 */ 65,
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
        /* 2018 */ 18,
        /* 2019 */ 6,
        /* 2020 */ 33,
        /* 2021 */ 36,
        /* 2022 */ 33,
        /* 2023 */ 35,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});
