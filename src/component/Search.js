import React from "react";

function Search({ onTyping }) {
    return (
        <div className="header">
            <h1>Team Users</h1>
        <div className="search">
            <input type="text" aria-label="search-box" placeholder="Cari" onChange={onTyping} />
        </div>
        </div>
    )
}

export default Search;