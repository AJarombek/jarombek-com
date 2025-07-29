/**
 * Create a root component for the react application
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Button from './Button';
import TitleImage from './TitleImage';
import FeatureList from './FeatureList';
import websiteFeatures from './websiteFeatures';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jarbek-home">
        <div className="jarbek-home-main">
          <div className="jarbek-home-main-overlay">
            <div className="jarbek-home-title-container">
              <h1 className="jarbek-home-title">Andrew Jarombek</h1>
            </div>
            <p className="jarbek-home-sub-title">Software Engineering Website</p>
            <div className="jarbek-home-buttons">
              <Link to="#features" className="jarbek-home-engineering-button">
                <Button activeColor="primary" passiveColor="primary">
                  ENGINEERING
                </Button>
              </Link>
              <Link to="https://capital.jarombek.com/" target="_blank" className="jarbek-home-capital-button">
                <Button activeColor="secondary" passiveColor="secondary">
                  FINANCE
                </Button>
              </Link>
            </div>
            <div className="jarbek-home-arrow">
              <TitleImage src="./assets/down.png" title="" link="#features" />
            </div>
          </div>
        </div>
        <div className="jarbek-home-break">
          <p>
            Developing Software Since <strong>Summer 2016</strong>
          </p>
        </div>
        <div className="jarbek-home-occupation">
          <div className="jarbek-home-occupation-text">
            <div>
              <p>Currently working as a </p>
              <p className="jarbek-home-occupation-title">
                <strong>Senior Staff Engineer/Software Engineering Senior Advisor</strong>
              </p>
            </div>
            <p>
              at <strong>Evernorth</strong>.
            </p>
          </div>
        </div>
        <FeatureList id="features" featureList={websiteFeatures} />
        <TitleImage
          className={classnames('footer-icon', 'footer-icon-home')}
          src="./assets/github.png"
          title="GITHUB"
          link="https://github.com/AJarombek"
        />
      </div>
    );
  }
}

// Enable Hot Module Replacement on this component
export default hot(module)(Home);
