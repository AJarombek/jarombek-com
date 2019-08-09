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

db.posts.createIndex(
    {
        'name': 'text',
        'title': 'text',
        'type': 'text',
        'date': 'text',
        'tags.name': 'text',
        'previewString': 'text',
        'sources.startName': 'text',
        'sources.endName': 'text',
        'sources.linkName': 'text',
        'sources.link': 'text'
    },
    {
        name: "post-text-index",
        default_language: 'none',
        weights: {
            'name': 100,
            'title': 100,
            'type': 10,
            'date': 5,
            'tags.name': 5,
            'previewString': 2,
            'sources.startName': 1,
            'sources.endName': 1,
            'sources.linkName': 1,
            'sources.link': 1
        }
    }
);

// Documents in the 'posts_content' collection

db.posts_content.insertOne({
    name: "jul-17-2019-jest-testing",
    date: new Date('2019-07-17T12:00:00'),
    content: [],
    contentString: "jest and javascript"
});

db.posts_content.insertOne({
    name: "jul-18-2019-mongodb",
    date: new Date('2019-07-18T12:00:00'),
    content: [],
    contentString: "javascript and mongodb"
});

db.posts_content.insertOne({
    name: "jul-19-2019-docker",
    date: new Date('2019-07-19T12:00:00'),
    content: [],
    contentString: "docker"
});

db.posts_content.insertOne({
    name: "jul-20-2019-react",
    date: new Date('2019-07-20T12:00:00'),
    content: [],
    contentString: "javascript and react and more javascript"
});

// Indexes for the 'posts_content' collection.

db.posts_content.createIndex(
    {
        'contentString': 'text'
    },
    {
        name: "post-content-text-index",
        default_language: 'none',
        weights: {
            'contentString': 5
        }
    }
);