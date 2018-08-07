/**
 * PaginationBar component
 * @author Andrew Jarombek
 * @since 8/4/2018
 */

import React from 'react';
import PropTypes from "prop-types";

const PaginationBar = ({move, first, previous, current, next, last}) => {
    return (
        <div className="jarbek-pagination-bar">
            { first ?
                <p className="jarbek-pag-first" onClick={() => move(first.link)}>{first.page}</p>
                : null
            }
            { previous && previous.page && previous.page !== first.page ?
                <div>
                    {(previous.page - first.page) > 1 ?
                        <p className="jarbek-pag-first-spread">...</p>
                        : null
                    }
                    <p className="jarbek-pag-previous" onClick={() => move(previous.link)}>
                        {previous.page}
                    </p>
                </div>
                : null
            }
            { current && current.page ?
                <p className="jarbek-pag-current">
                    {current.page}
                </p>
                : null
            }
            { next && next.page && next.page !== last.page ?
                <div>
                    {(last.page - next.page) > 1 ?
                        <p className="jarbek-pag-last-spread">...</p>
                        : null
                    }
                    <p className="jarbek-pag-next" onClick={() => move(next.link)}>
                        {next.page}
                    </p>
                </div>
                : null
            }
            { last && last.page ?
                <p className="jarbek-pag-last" onClick={() => move(last.link)}>{last.page}</p>
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