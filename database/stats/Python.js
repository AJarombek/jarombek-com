/**
 * Code written statistics for Python.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Python"});

db.statistics.insertOne({
    name: "Python",
    first_year: 2014,
    color: "#3872a5",
    lines: [
        /* 2014 */ 1231,
        /* 2015 */ 931,
        /* 2016 */ 1122,
        /* 2017 */ 1288,
        /* 2018 */ 1975,
        /* 2019 */ 20192,
        /* 2020 */ 16740,
        /* 2021 */ 19917,
        /* 2022 */ 18706,
        /* 2023 */ 14156,
        /* 2024 */ 8592,
        /* 2025 */ 4247,
    ],
    rank: [
        /* 2014 */ 2,
        /* 2015 */ 2,
        /* 2016 */ 7,
        /* 2017 */ 8,
        /* 2018 */ 8,
        /* 2019 */ 1,
        /* 2020 */ 2,
        /* 2021 */ 2,
        /* 2022 */ 1,
        /* 2023 */ 1,
        /* 2024 */ 1,
        /* 2025 */ 1,
    ]
});
