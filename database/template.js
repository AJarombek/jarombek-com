/**
 * Script for the MongoDB Shell.
 * @author Andrew Jarombek
 * @since 1/5/2023
 */

connection = new Mongo();
db = connection.getDB("jarombekcom");

content = [];

preview = content.slice(0, 2);

postName = "jan-1-2023-name";
postDate = new Date('2023-01-01T12:00:00');
existingPost = db.posts.findOne({name: postName});

postViews = (existingPost) ? existingPost.views : 0;

db.posts.remove({name: postName});
db.posts_content.remove({name: postName});

db.posts.insertOne({
    name: postName,
    title: "Title",
    description: ``,
    date: postDate,
    type: "Discovery/Retrospective/Experience",
    views: postViews,
    tags: [
        {
            name: "JavaScript",
            picture: "https://asset.jarombek.com/logos/js.png",
            color: "javascript"
        }
    ],
    preview,
    previewString: JSON.stringify(preview),
    sources: [
        {
            startName: "\"this\", ",
            endName: "",
            linkName: "http",
            link: "http"
        },
        {
            startName: "Kyle Simpson, ",
            endName: " (Sebastopol, CA: O'Reilly, 2014), 14",
            linkName: "You Don't Know JavaScript: this & Object Prototypes",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes"
        },
        {
            startName: "",
            endName: ", 22",
            linkName: "Simpson.",
            link: "https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes"
        }
    ]
});

db.posts_content.insertOne({
    name: postName,
    date: postDate,
    content,
    contentString: JSON.stringify(content)
});
