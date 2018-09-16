import React from 'react';
import {pure} from 'recompose';
import {TextField} from '@material-ui/core';

const SearchForm = pure(({keyword, updateSearchKeyword}) => (
    <TextField
        id="search_form"
        fullWidth
        autoFocus
        placeholder="検索したい人の名前や部署名"
        value={keyword}
        onChange={(event) => updateSearchKeyword(event.target.value)}
    />
));

export default SearchForm;
