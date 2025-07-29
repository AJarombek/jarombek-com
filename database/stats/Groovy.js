/**
 * Code written statistics for Groovy.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Groovy"});

db.statistics.insertOne({
    name: "Groovy",
    first_year: 2016,
    color: "#307b98",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 179,
        /* 2017 */ 113,
        /* 2018 */ 2164,
        /* 2019 */ 2297,
        /* 2020 */ 10510,
        /* 2021 */ 4129,
        /* 2022 */ 396,
        /* 2023 */ 804,
        /* 2024 */ 267,
        /* 2025 */ 430,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ 14,
        /* 2017 */ 19,
        /* 2018 */ 7,
        /* 2019 */ 11,
        /* 2020 */ 4,
        /* 2021 */ 7,
        /* 2022 */ 23,
        /* 2023 */ 13,
        /* 2024 */ 14,
        /* 2025 */ 9,
    ]
});
