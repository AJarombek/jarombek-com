/**
 * Code written statistics for Dockerfile.
 * @author Andrew Jarombek
 * @since 9/18/2021
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Dockerfile"});

db.statistics.insertOne({
    name: "Dockerfile",
    first_year: 2019,
    color: "#238edf",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 377,
        /* 2020 */ 504,
        /* 2021 */ 262,
        /* 2022 */ 643,
        /* 2023 */ 52,
        /* 2024 */ 30,
        /* 2025 */ 50,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ null,
        /* 2018 */ null,
        /* 2019 */ 18,
        /* 2020 */ 17,
        /* 2021 */ 20,
        /* 2022 */ 21,
        /* 2023 */ 28,
        /* 2024 */ 24,
        /* 2025 */ 18,
    ]
});
