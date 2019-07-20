/**
 * Script to populate a test database to run Unit Tests against.  Executed in the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 7/17/2019
 */

const connection = new Mongo();
const db = connection.getDB("jarombekcom");

// Documents in the 'posts' collection

db.posts.insertOne({
    name: "jul-17-2019-jest-testing",
    title: "Jest Testing",
    description: "jest testing",
    date: new Date('2019-07-17T12:00:00'),
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

db.posts.insertOne({
    name: "jul-18-2019-mongodb",
    title: "Intro to MongoDB",
    description: "intro to mongodb",
    date: new Date('2019-07-18T12:00:00'),
    type: "Discovery",
    views: 0,
    tags: [
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        },
        {
            name: "MongoDB",
            picture: "https://asset.jarombek.com/logos/mongodb.png",
            color: "mongodb"
        }
    ],
    preview: [],
    previewString: "",
    sources: []
});

db.posts.insertOne({
    name: "jul-19-2019-docker",
    title: "Working with Docker",
    description: "working with docker",
    date: new Date('2019-07-19T12:00:00'),
    type: "Discovery",
    views: 0,
    tags: [
        {
            name: "Docker",
            picture: "https://asset.jarombek.com/logos/docker.png",
            color: "docker"
        }
    ],
    preview: [],
    previewString: "",
    sources: []
});

db.posts.insertOne({
    name: "jul-20-2019-react",
    title: "Learning React",
    description: "learning react",
    date: new Date('2019-07-20T12:00:00'),
    type: "Discovery",
    views: 0,
    tags: [
        {
            name: "React",
            picture: "https://asset.jarombek.com/logos/react.png",
            color: "react"
        },
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

// Documents in the 'posts_content' collection

db.posts_content.insertOne({
    name: "jul-17-2019-jest-testing",
    content: [],
    contentString: ""
});

db.posts_content.insertOne({
    name: "jul-18-2019-mongodb",
    content: [],
    contentString: ""
});

db.posts_content.insertOne({
    name: "jul-19-2019-docker",
    content: [],
    contentString: ""
});

db.posts_content.insertOne({
    name: "jul-20-2019-react",
    content: [],
    contentString: ""
});