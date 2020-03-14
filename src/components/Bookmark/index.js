import React from 'react';

const Bookmark = ({bookmark}) => {
    return (<div className='bookmark'>
        <h1>{bookmark.title}</h1>
        <a href='https://muzungu.pl' target='_blank' rel='noopener noreferrer' >https://muzungu.pl</a>
    </div>)
}

export default Bookmark