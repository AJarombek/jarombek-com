/**
 * Code written statistics for PL/SQL.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "PL/SQL"});

db.statistics.insertOne({
    name: "PL/SQL",
    first_year: 2016,
    color: "#eb0400",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 203,
        /* 2017 */ 844,
        /* 2018 */ 327,
        /* 2019 */ 239,
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
        /* 2016 */ 12,
        /* 2017 */ 10,
        /* 2018 */ 17,
        /* 2019 */ 23,
        /* 2020 */ 42,
        /* 2021 */ 36,
        /* 2022 */ 33,
        /* 2023 */ 35,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});
