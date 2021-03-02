import React, { useState } from 'react';

export default function SearchBox(props) {
    const [name, setName] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        e.target.reset()
        props.history.push(`/search/name/${name}`);
    };
    return (
        <form  onSubmit={submitHandler}>
            <div className="search-box">
                <input className='search-txt' type="text" name="q" id="q" onChange={(e) => setName(e.target.value)}></input>
                <button  className="search-btn" type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </form>
    );
}