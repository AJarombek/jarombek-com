/**
 * SearchBar Component
 * @author Andrew Jarombek
 * @since 8/22/2018
 */

import React from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

const SearchBar = ({onChangeSearch, onKeyPressSearch, onSearch, defaultValue}) => {
    return (
        <div className="jarbek-search-bar">
            <input type="text"
                   name="search"
                   placeholder="Search"
                   defaultValue={defaultValue}
                   onKeyUp={onKeyPressSearch}
                   onChange={onChangeSearch}/>
            <Button activeColor="primary" passiveColor="primary"
                    borderColor="primary" size="box-large"
                    onClick={onSearch}>
                GO
            </Button>
        </div>
    );
};

SearchBar.propTypes = {
    onChangeSearch: PropTypes.func,
    onKeyPressSearch: PropTypes.func,
    onSearch: PropTypes.func,
    defaultValue: PropTypes.string
};

SearchBar.defaultProps = {
    onChangeSearch: f=>f,
    onKeyPressSearch: f=>f,
    onSearch: f=>f,
    defaultValue: ""
};

export default SearchBar;