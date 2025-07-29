/**
 * Code written statistics for XML.
 * @author Andrew Jarombek
 * @since 9/15/2019
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

db.statistics.remove({name: "XML"});

db.statistics.insertOne({
    name: "XML",
    first_year: 2015,
    color: "#ea7203",
    lines: [
        /* 2014 */ null,
        /* 2015 */ 42,
        /* 2016 */ 2646,
        /* 2017 */ 5815,
        /* 2018 */ 111,
        /* 2019 */ 40,
        /* 2020 */ 54,
        /* 2021 */ 10,
        /* 2022 */ 115,
        /* 2023 */ 22,
        /* 2024 */ 84,
        /* 2025 */ 0,
    ],
    rank: [
        /* 2014 */ null,
        /* 2015 */ 7,
        /* 2016 */ 3,
        /* 2017 */ 4,
        /* 2018 */ 24,
        /* 2019 */ 29,
        /* 2020 */ 35,
        /* 2021 */ 33,
        /* 2022 */ 27,
        /* 2023 */ 33,
        /* 2024 */ 19,
        /* 2025 */ 25,
    ]
});
