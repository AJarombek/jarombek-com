/**
 * PaginationBar component
 * @author Andrew Jarombek
 * @since 8/4/2018
 */

import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {toRomanNumeral} from './romanNumerals';

const PaginationBar = ({first, previous, current, next, last, link}) => {
    return (
        <div className="jarbek-pagination-bar">
            { first && first.page ?
                <Link className="jarbek-pag-first" to={`${link}${first.page}`}>
                    <p>{toRomanNumeral(first.page)}</p>
                </Link>
                : null
            }
            { previous && previous.page && (previous.page - first.page) > 1 ?
                <p className="jarbek-pag-first-spread">...</p>
                : null
            }
            { previous && previous.page && previous.page !== first.page ?
                <Link className="jarbek-pag-previous-item" to={`${link}${previous.page}`}>
                    <p>{toRomanNumeral(previous.page)}</p>
                </Link>
                : null
            }
            { current && current.page ?
                <p className="jarbek-pag-current">
                    {toRomanNumeral(current.page)}
                </p>
                : null
            }
            { next && next.page && next.page !== last.page ?
                <Link className="jarbek-pag-next-item" to={`${link}${next.page}`}>
                    <p>{toRomanNumeral(next.page)}</p>
                </Link>
                : null
            }
            { next && next.page && (last.page - next.page) > 1 ?
                <p className="jarbek-pag-last-spread">...</p>
                : null
            }
            { last && last.page ?
                <Link className="jarbek-pag-last" to={`${link}${last.page}`}>
                    <p>{toRomanNumeral(last.page)}</p>
                </Link>
                : null
            }
        </div>
    );
};

PaginationBar.propTypes = {
    first: PropTypes.object,
    previous: PropTypes.object,
    current: PropTypes.object,
    next: PropTypes.object,
    last: PropTypes.object,
    link: PropTypes.string
};

export default PaginationBar;