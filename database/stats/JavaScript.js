/**
 * Code written statistics for JavaScript.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "JavaScript"});

db.statistics.insertOne({
    name: "JavaScript",
    first_year: 2016,
    color: "#cfb029",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 2008,
        /* 2017 */ 6663,
        /* 2018 */ 16414,
        /* 2019 */ 13354,
        /* 2020 */ 42578,
        /* 2021 */ 10176,
        /* 2022 */ 4083,
        /* 2023 */ 2566,
        /* 2024 */ 1297,
        /* 2025 */ 278,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 4,
        /* 2017 */ 3,
        /* 2018 */ 1,
        /* 2019 */ 2,
        /* 2020 */ 1,
        /* 2021 */ 3,
        /* 2022 */ 4,
        /* 2023 */ 7,
        /* 2024 */ 4,
        /* 2025 */ 10,
    ]
});
