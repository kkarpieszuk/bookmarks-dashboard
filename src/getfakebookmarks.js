import bookmarks from './bookmarks.json'

const getBookmarks = () => {

    return new Promise( (success, error) => {
        success( bookmarks );
    } );
}

export default getBookmarks