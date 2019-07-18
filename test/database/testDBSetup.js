/**
 * Script to populate a test database to run Unit Tests against.  Executed in the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/17/2019
 */

const connection = new Mongo();
const db = connection.getDB("jarombekcom");

db.posts.insertOne({
    name: "jul-17-2019-jest-testing",
    title: "Jest Testing",
    description: "jest testing",
    date: new Date('2019-17-07T12:00:00'),
    type: "Discovery",
    views: 0,
    tags: [
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        }
    ],
    preview: [],
    previewString: "",
    sources: []
});

db.posts_content.insertOne({
    name: "jul-17-2019-jest-testing",
    content: [],
    contentString: ""
});