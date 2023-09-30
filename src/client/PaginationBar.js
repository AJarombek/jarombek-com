/**
 * PaginationBar component
 * @author Andrew Jarombek
 * @since 8/4/2018
 */

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toRomanNumeral } from "./romanNumerals";

const PaginationBar = ({ current, last, link }) => {
  const previous = useMemo(() => current - 1, [current]);
  const next = useMemo(() => current + 1, [current]);

  return (
    <div className="jarbek-pagination-bar">
      {current !== 1 ? (
        <Link className="jarbek-pag-first" to={`${link}1`}>
          <p>I</p>
        </Link>
      ) : null}
      {previous - 1 > 1 ? <p className="jarbek-pag-first-spread">...</p> : null}
      {previous !== 1 ? (
        <Link className="jarbek-pag-previous-item" to={`${link}${previous}`}>
          <p>{toRomanNumeral(previous)}</p>
        </Link>
      ) : null}
      {current ? (
        <p className="jarbek-pag-current">{toRomanNumeral(current)}</p>
      ) : null}
      {next !== last ? (
        <Link className="jarbek-pag-next-item" to={`${link}${next}`}>
          <p>{toRomanNumeral(next)}</p>
        </Link>
      ) : null}
      {last - next > 1 ? <p className="jarbek-pag-last-spread">...</p> : null}
      {last !== current ? (
        <Link className="jarbek-pag-last" to={`${link}${last}`}>
          <p>{toRomanNumeral(last)}</p>
        </Link>
      ) : null}
    </div>
  );
};

PaginationBar.propTypes = {
  current: PropTypes.number,
  last: PropTypes.number,
  link: PropTypes.string,
};

export default PaginationBar;
