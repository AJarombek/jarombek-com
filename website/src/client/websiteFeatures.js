/**
 * All the features to display on the home page of the website
 * @author Andrew Jarombek
 * @since 8/29/2018
 */

const websiteFeatures = [
  {
    title: 'Resume'.toUpperCase(),
    content: {
      text: `Explore an interactive tour of my career in software engineering, 
        beginning with my time as a student at St. Lawrence University.`,
      picture: null,
    },
    orientation: 'left',
    backgroundColor: null,
    backgroundPicture: 'computer',
    link: '/resume',
  },
  {
    title: 'Statistics'.toUpperCase(),
    content: {
      text: 'Examine the programming languages and frameworks I utilize most through dynamic charts.',
      picture: 'https://asset.jarombek.com/logos/tech_logos.svg',
    },
    orientation: 'right',
    backgroundColor: 'white',
    backgroundPicture: null,
    link: '/stats',
  },
  {
    title: 'Articles'.toUpperCase(),
    content: {
      // eslint-disable-next-line quotes
      text: "Browse articles on software engineering that I've authored and track my journey as a programmer.",
      picture: null,
    },
    orientation: 'left',
    backgroundColor: null,
    backgroundPicture: 'kayak',
    link: '/blog',
  },
];

export default websiteFeatures;
