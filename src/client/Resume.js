/**
 * Resume Component
 * @author Andrew Jarombek
 * @since 9/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import WebsiteTemplate from './WebsiteTemplate';
import TitleImage from './TitleImage';
import Timeline from './Timeline';
import resumeSections from './resumeSections';
import queryString from 'query-string';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    const { title, content, languages, technologies } = resumeSections[0];

    const points = props.points || 5;
    const position = props.position || 1;

    this.state = {
      points,
      position,
      prevPosition: position - 1,
      title,
      content,
      languages,
      technologies
    };
  }

  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    points: PropTypes.number,
    position: PropTypes.number
  };

  /**
   * Called when a component is about to mount.  The resume content is initialized here with
   * all the props passed to the component.
   * NOTE: This lifecycle call IS made on server side React.  This is simply a preparation
   * call before interacting with the DOM
   */
  componentWillMount() {
    this.initResumeContent(this.props);
  }

  /**
   * Called when the component is about to receive new props.  The new resume content is
   * initialized here with the new props passed to the component.
   * @param nextProps - the props that are about to replace the existing props.
   */
  componentWillReceiveProps(nextProps) {
    this.initResumeContent(nextProps);
  }

  /**
   * Initialize the content shown in the resume component.  The content depends on the properties
   * passed to the component.  This method is dependent on the global {@code resumeSections}
   * object which hold information about each resume page.
   * @param props - The properties passed to the component.
   */
  initResumeContent(props) {
    const { page } = queryString.parse(props.location.search);
    const position = +page || +props.position || 1;
    const prevPosition = this.state.position || position - 1;

    const { title, content, languages, technologies } = resumeSections[position - 1];

    this.setState({
      position,
      prevPosition,
      title,
      content,
      languages,
      technologies
    });
  }

  /**
   * Render the JSX
   */
  render() {
    const { points, position, prevPosition } = this.state;

    return (
      <WebsiteTemplate>
        <div className="jarbek-resume">
          <div className="jarbek-resume-timeline">
            <Timeline points={+points} position={+position} labels={resumeSections.map((item) => item.year)} />
          </div>
          <div className="jarbek-resume-title">
            {resumeSections.map((item, index) => (
              <div
                key={`jarbek-resume-title-${index}`}
                className={`${
                  position === index + 1
                    ? prevPosition <= position
                      ? 'jarbek-resume-title-active-right'
                      : 'jarbek-resume-title-active-left'
                    : ''
                }
                 ${
                   position !== index + 1
                     ? index + 1 === prevPosition
                       ? position > prevPosition
                         ? 'jarbek-resume-title-just-viewed-left'
                         : 'jarbek-resume-title-just-viewed-right'
                       : 'jarbek-resume-title-inactive'
                     : ''
                 }`}
              >
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
          {+position !== 1 ? (
            <Link className="jarbek-resume-prev" to={`/resume?page=${position - 1}`}>
              <TitleImage src="./assets/down-black.png" title="" />
            </Link>
          ) : null}
          <div className="jarbek-resume-content">
            {resumeSections.map((item, index) => (
              <div
                key={`jarbek-resume-content-${index + 1}`}
                className={`${
                  position === index + 1
                    ? prevPosition <= position
                      ? 'jarbek-resume-content-active-right'
                      : 'jarbek-resume-content-active-left'
                    : ''
                }
                 ${
                   position !== index + 1
                     ? index + 1 === prevPosition
                       ? position > prevPosition
                         ? 'jarbek-resume-content-just-viewed-left'
                         : 'jarbek-resume-content-just-viewed-right'
                       : 'jarbek-resume-content-inactive'
                     : ''
                 }`}
              >
                {item.content}
              </div>
            ))}
          </div>
          {+position !== +points ? (
            <Link className="jarbek-resume-next" to={`/resume?page=${position + 1}`}>
              <TitleImage src="./assets/down-black.png" title="" />
            </Link>
          ) : null}
          <div className="jarbek-resume-tech">
            {resumeSections.map((item, index) => (
              <div
                key={`jarbek-resume-tech-${index + 1}`}
                className={`${
                  position === index + 1
                    ? prevPosition <= position
                      ? 'jarbek-resume-tech-active-right'
                      : 'jarbek-resume-tech-active-left'
                    : ''
                }
                 ${
                   position !== index + 1
                     ? index + 1 === prevPosition
                       ? position > prevPosition
                         ? 'jarbek-resume-tech-just-viewed-left'
                         : 'jarbek-resume-tech-just-viewed-right'
                       : 'jarbek-resume-tech-inactive'
                     : ''
                 }`}
              >
                {item.languages.length ? (
                  <p className="jarbek-resume-tech-languages">
                    <strong>Languages: </strong>
                    {item.languages.reduce((acc, item, index) => (index ? `${acc}, ${item}` : `${item}`))}
                  </p>
                ) : null}
                {item.technologies.length ? (
                  <p className="jarbek-resume-tech-technologies">
                    <strong>Technologies: </strong>
                    {item.technologies.reduce((acc, item, index) => (index ? `${acc}, ${item}` : `${item}`))}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </WebsiteTemplate>
    );
  }
}

export default Resume;
