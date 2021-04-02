import React from 'react';
import { SearchContainer } from './collection-search.styles';
export const SearchBox = ({ placeholder, onChange }) => (
    <SearchContainer
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={onChange}
    />
);