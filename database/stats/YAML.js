/**
 * Code written statistics for YAML.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "YAML"});

db.statistics.insertOne({
    name: "YAML",
    first_year: 2017,
    color: "#000000",
    lines: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 33,
        /* 2018 */ 258,
        /* 2019 */ 2063,
        /* 2020 */ 1649,
        /* 2021 */ 3436,
        /* 2022 */ 1770,
        /* 2023 */ 2329,
        /* 2024 */ 1296,
        /* 2025 */ 630,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ null,
        /* 2016 */ null,
        /* 2017 */ 20,
        /* 2018 */ 19,
        /* 2019 */ 13,
        /* 2020 */ 12,
        /* 2021 */ 9,
        /* 2022 */ 11,
        /* 2023 */ 9,
        /* 2024 */ 5,
        /* 2025 */ 5,
    ]
});
