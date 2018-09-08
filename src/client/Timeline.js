/**
 * Timeline Component
 * @author Andrew Jarombek
 * @since 9/8/2018
 */

import React from 'react';
import PropTypes from "prop-types";

const SearchBar = ({points, position}) => {
    return (
        <div className="jarbek-timeline">
            { points ?
                <div>
                    <div className="jarbek-timeline-point jarbek-timeline-first-point"> </div>
                    { [...Array(points-1)].map(i =>
                        <div key={`jarbek-timeline-key-${i}`}>
                            <div className="jarbek-timeline-line"> </div>
                            <div className="jarbek-timeline-point"> </div>
                        </div>
                    )}
                </div>: null
            }
        </div>
    );
};

SearchBar.propTypes = {
    points: PropTypes.number.required,
    position: PropTypes.number.required
};

SearchBar.defaultProps = {
    points: 2,
    position: 1
};

export default SearchBar;