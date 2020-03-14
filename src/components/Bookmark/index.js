import React from 'react';

const Bookmark = ({bookmark, onclick}) => {
    return (<div className='bookmark' id={bookmark.id} onClick={onclick}>
        <h1>{bookmark.title}</h1>
        <a href={bookmark.url} target='_blank' rel='noopener noreferrer' >{bookmark.url}</a>
    </div>)
}

export default Bookmark