import React, { useState } from "react";


const SearchBar = ({handleSubmit}) => {
    const [term, setTerm] = useState("");
    
    const handleChange = (e) => {
        setTerm(e.target.value)
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input value={term} onChange={handleChange} type="text"></input>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;