import {Search} from "react-feather";
import React from "react";

const SearchBarComponent = (props: any) => {
    return (
        <div className="input-group d-flex flex-row">
            <input type="text" className="search-query form-control search-bar"
                   placeholder="Search Rhode Island startups, investors, code schools, etc."/>
            <span id={'hero-search-btn'} className="input-group-btn">
                <button className="btn" type="button">
                    <Search/>
                </button>
            </span>
        </div>
    )
};

export default SearchBarComponent;