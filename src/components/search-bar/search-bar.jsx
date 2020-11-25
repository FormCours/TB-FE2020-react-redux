import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './search-bar.module.css';

const SearchBar = (props) => {
    const {label, placeholder, className} = props;
    const {onSearch} = props;

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
        setSearch('');
    }

    return (
        <form className={`${style.searchBar} ${className}`} onSubmit={handleSubmit}>
            <label>
                {label}
                <input type="text" placeholder={placeholder}
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}/>
            </label>
            <input type="submit" value="Rechercher"/>
        </form>
    )
}

SearchBar.defaultProps = {
    placeholder: '',
    className: '',
    onSearch: () => {}
}

SearchBar.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    onSearch: PropTypes.func
}

export default SearchBar;