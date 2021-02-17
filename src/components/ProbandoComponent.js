import React, { useState } from "react"

function Probando() {
    const [searches, setSearches] = useState([])
    const [query, setQuery] = useState("")

    const handleClick = () => {
           setSearches( [...searches, query])
    }
    const updateQuery = ({target}) => {
        setQuery(target.value)
    }

    const submitHandler = e => {
        // Prevent form submission on Enter key
        e.preventDefault()
    }
    const Search = ({query}) => <li>{query}</li>
    return (
        <div className="">
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        className="search-field-input"
                        placeholder="Search for..."
                        type="text"
                        onChange={updateQuery}
                    />
                    <button
                        className="search-field-button"
                        type="button"
                        onClick={handleClick}
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className="row">
                <ul className="previousSearch">
                    {searches.map((query, i) => (

                        <Search
                            query={query}
                            // Prevent duplicate keys by appending index:
                            key={query + i}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Probando