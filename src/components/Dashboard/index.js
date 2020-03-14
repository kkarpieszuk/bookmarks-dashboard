import React from 'react';
import Bookmark from '../Bookmark';

const Dashboard = ( {bookmarks, onbookmarkclick} ) => {

    return (<div className='dashboard'>
        {bookmarks.map( el => <Bookmark bookmark={el} key={el.id} onclick={onbookmarkclick} /> )}    
    </div>
    )
}

export default Dashboard