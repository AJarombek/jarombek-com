/**
 * Code written statistics for PHP.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "PHP"});

db.statistics.insertOne({
    name: "PHP",
    first_year: 2016,
    color: "#7275aa",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 5433,
        /* 2017 */ 3670,
        /* 2018 */ 356,
        /* 2019 */ 357,
        /* 2020 */ 35,
        /* 2021 */ 4,
        /* 2022 */ 401,
        /* 2023 */ 442,
        /* 2024 */ 0,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 2,
        /* 2017 */ 5,
        /* 2018 */ 16,
        /* 2019 */ 20,
        /* 2020 */ 39,
        /* 2021 */ 35,
        /* 2022 */ 22,
        /* 2023 */ 19,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});
