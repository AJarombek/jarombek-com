### Overview

Model objects based on documents in MongoDB and DynamoDB.  Models are created with Mongoose and Dynamoose.

### Files

| Filename            | Description                                                                         |
|---------------------|-------------------------------------------------------------------------------------|
| `audit.js`          | Audit object which holds logging information.                                       |
| `post.js`           | Post object for blog posts (minus the tokenized content).                           |
| `postContent.js`    | PostContent object for the JSX of blog posts.                                       |
| `statistics.js`     | Statistics object representing code statistics for a specific programming language. |
| `statisticsMeta.js` | StatisticsMeta object containing metadata about my programming statistics.          |
| `subscriber.js`     | Subscriber object for subscribed users.                                             |
| `viewed.js`         | Viewed object for blog viewing counts.                                              |