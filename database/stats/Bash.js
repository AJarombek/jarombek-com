/**
 * Code written statistics for Bash.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "Bash"});

db.statistics.insertOne({
    name: "Bash",
    first_year: 2017,
    color: "#67b14d",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 129,
        /* 2018 */ 1344,
        /* 2019 */ 2353,
        /* 2020 */ 2140,
        /* 2021 */ 611,
        /* 2022 */ 820,
        /* 2023 */ 729,
        /* 2024 */ 263,
        /* 2025 */ 540,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 18,
        /* 2018 */ 10,
        /* 2019 */ 10,
        /* 2020 */ 9,
        /* 2021 */ 15,
        /* 2022 */ 17,
        /* 2023 */ 15,
        /* 2024 */ 15,
        /* 2025 */ 7,
    ]
});
