import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './search.styles.scss';

export default function Search() {
    return (
        <div className="search">
            <input type="text" name="searchInput" />
            <div className="searchIcon"> <FaSearch /> </div>
        </div>
    )
}