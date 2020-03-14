import React from 'react';
import Bookmark from '../Bookmark';

const Dashboard = ( {bookmarks} ) => (<div className='dashboard'>
        {bookmarks.map( el => <Bookmark bookmark={el} key={el.id} /> )}    
    </div>
    )

export default Dashboard