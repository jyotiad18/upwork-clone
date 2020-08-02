import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import "./Search.css";

function Search() {
	
	return (
		<div className="search">			
			<div className="search__detail">
				<div className="search__inputs">
					<input type="text" className="search__text" placeholder="Search for jobs"></input>
					<SearchIcon font-size="large" className="search__icon"></SearchIcon>
				</div>
				<p>Advance Search</p>
			</div>
			
		</div>
	)
}

export default Search;
