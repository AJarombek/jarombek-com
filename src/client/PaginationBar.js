/**
 * PaginationBar component
 * @author Andrew Jarombek
 * @since 8/4/2018
 */

import React from 'react';
import PropTypes from "prop-types";

function toRomanNumeral(int) {
    const romanNumerals = [
        {number: 100, letter: 'C'},
        {number: 90, letter: 'XC'},
        {number: 50, letter: 'L'},
        {number: 40, letter: 'XL'},
        {number: 10, letter: 'X'},
        {number: 9, letter: 'IX'},
        {number: 5, letter: 'V'},
        {number: 4, letter: 'IV'},
        {number: 1, letter: 'I'}
    ];

    let convertedNumber = "";
    for (const i in romanNumerals) {
        while (int >= romanNumerals[i].number) {
            convertedNumber += romanNumerals[i].letter;
            int -= romanNumerals[i].number;
        }
    }

    return convertedNumber;
}

const PaginationBar = ({move, first, previous, current, next, last}) => {
    return (
        <div className="jarbek-pagination-bar">
            { first && first.page ?
                <p className="jarbek-pag-first" onClick={() => move(first.link)}>
                    {toRomanNumeral(first.page)}
                </p>
                : null
            }
            { previous && previous.page && (previous.page - first.page) > 1 ?
                <p className="jarbek-pag-first-spread">...</p>
                : null
            }
            { previous && previous.page && previous.page !== first.page ?
                <p className="jarbek-pag-previous-item" onClick={() => move(previous.link)}>
                    {toRomanNumeral(previous.page)}
                </p>
                : null
            }
            { current && current.page ?
                <p className="jarbek-pag-current">
                    {toRomanNumeral(current.page)}
                </p>
                : null
            }
            { next && next.page && next.page !== last.page ?
                <p className="jarbek-pag-next-item" onClick={() => move(next.link)}>
                    {toRomanNumeral(next.page)}
                </p>
                : null
            }
            { next && next.page && (last.page - next.page) > 1 ?
                <p className="jarbek-pag-last-spread">...</p>
                : null
            }
            { last && last.page ?
                <p className="jarbek-pag-last" onClick={() => move(last.link)}>
                    {toRomanNumeral(last.page)}
                </p>
                : null
            }
        </div>
    );
};

PaginationBar.propTypes = {
    move: PropTypes.func,
    first: PropTypes.object,
    previous: PropTypes.object,
    current: PropTypes.object,
    next: PropTypes.object,
    last: PropTypes.object
};

PaginationBar.defaultProps = {
    move: f=>f
};

export default PaginationBar;