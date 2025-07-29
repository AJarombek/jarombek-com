/**
 * Code written statistics for Scala.
 * @author Andrew Jarombek
 * @since 11/17/2022
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Scala"});

db.statistics.insertOne({
    name: "Scala",
    first_year: 2022,
    color: "#d33322",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ null,
        /* 2021 */ null,
        /* 2022 */ 1188,
        /* 2023 */ 0,
        /* 2024 */ 0,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ null,
        /* 2020 */ null,
        /* 2021 */ null,
        /* 2022 */ 15,
        /* 2023 */ 35,
        /* 2024 */ 30,
        /* 2025 */ 25,
    ]
});