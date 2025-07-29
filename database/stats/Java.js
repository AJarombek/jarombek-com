/**
 * Code written statistics for Java.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Java"});

db.statistics.insertOne({
    name: "Java",
    first_year: 2014,
    color: "#db6902",
    lines: [
        /* 2014 */ 4282,
        /* 2015 */ 1585,
        /* 2016 */ 12962,
        /* 2017 */ 12113,
        /* 2018 */ 4769,
        /* 2019 */ 4439,
        /* 2020 */ 2042,
        /* 2021 */ 5206,
        /* 2022 */ 2724,
        /* 2023 */ 2677,
        /* 2024 */ 723,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ 1,
        /* 2015 */ 1,
        /* 2016 */ 1,
        /* 2017 */ 1,
        /* 2018 */ 3,
        /* 2019 */ 5,
        /* 2020 */ 10,
        /* 2021 */ 5,
        /* 2022 */ 8,
        /* 2023 */ 5,
        /* 2024 */ 10,
        /* 2025 */ 25,
    ]
});
