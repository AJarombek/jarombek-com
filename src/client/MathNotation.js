/**
 * MathNotation Component
 * @author Andrew Jarombek
 * @since 10/6/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const MathNotation = ({ tex }) => {
    return <div className="jarbek-math-notation">
        <BlockMath math={tex} />
    </div>;
};

MathNotation.propTypes = {
    tex: PropTypes.string.isRequired
};

export default MathNotation;