import React from 'react';

const ReturnBookmark = ( props ) => {
    if ( !props.previousBookmarks ) {
        return null;
    }
    return (
        <div onClick={props.onclick}>go back...</div>
    )
}

export default ReturnBookmark;