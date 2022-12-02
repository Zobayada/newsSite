import React from 'react';
import { useGlobalContext } from './context';

const Search = () => {
    const { query, searchPost } = useGlobalContext();
    return (
        <>
            <div className="search">
                <h1>AfnanTech News Website</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <input type="text" placeholder='Search Here'
                            value={query}
                            onChange={(e) => searchPost(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search