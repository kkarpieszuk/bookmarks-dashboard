import React from 'react';
import Bookmark from '../Bookmark';
import ReturnBookmark from '../ReturnBookmark';

const Dashboard = ( props ) => {
    return (<div className='dashboard'>
        <ReturnBookmark onclick={props.backBookmarksTree} previousBookmarks={props.previousBookmarks} />
        {props.bookmarks.map( el => <Bookmark bookmark={el} key={el.id} onclick={props.onbookmarkclick} /> )}    
    </div>
    )
}

export default Dashboard