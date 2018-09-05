/**
 * All the features to display on the home page of the website
 * @author Andrew Jarombek
 * @since 8/29/2018
 */

const websiteFeatures = [
    {
        title: "Resume".toUpperCase(),
        content: {
            text: `Take an interactive tour of my software development career, starting as a 
                student at St. Lawrence University.`,
            picture: null
        },
        orientation: "left",
        backgroundColor: null,
        backgroundPicture: "computer",
        link: "/resume"
    },
    {
        title: "Statistics".toUpperCase(),
        content: {
            text: `Analyze which programming languages and frameworks I use the most with 
                dynamic charts.`,
            picture: ""
        },
        orientation: "right",
        backgroundColor: "white",
        backgroundPicture: null,
        link: "/stats"
    },
    {
        title: "Articles".toUpperCase(),
        content: {
            text: `Read software development articles I've written and follow my progress as a 
                programmer.`,
            picture: null
        },
        orientation: "left",
        backgroundColor: null,
        backgroundPicture: "kayak",
        link: "/blog"
    }
];

export default websiteFeatures;