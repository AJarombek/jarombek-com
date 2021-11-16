/**
 * Timeline Component
 * @author Andrew Jarombek
 * @since 9/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const Timeline = ({ points, position, labels }) => {
  return (
    <div className="jarbek-timeline">
      {points ? (
        <div>
          <div className="jarbek-timeline-section jarbek-timeline-first-section">
            <div> </div>
            <div className="jarbek-timeline-point jarbek-timeline-point-active"> </div>
            <p className={'jarbek-timeline-label'}>{labels[0]}</p>
          </div>
          {[...[...Array(points - 1)].map((item, index) => index + 1)].map((i) => (
            <div key={`jarbek-timeline-key-${i}`} className="jarbek-timeline-section">
              <div
                className={`jarbek-timeline-line
                            ${i + 1 <= position ? 'jarbek-timeline-line-active' : 'jarbek-timeline-point-inactive'}`}
              >
                {' '}
              </div>
              <div
                className={`jarbek-timeline-point
                            ${i + 1 <= position ? 'jarbek-timeline-point-active' : 'jarbek-timeline-point-inactive'}`}
              >
                {' '}
              </div>
              <p className={'jarbek-timeline-label'}>{labels[i]}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

Timeline.propTypes = {
  points: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  labels: PropTypes.array.isRequired
};

Timeline.defaultProps = {
  points: 2,
  position: 1
};

export default Timeline;
