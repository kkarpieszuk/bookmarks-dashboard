import React,{useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import getBookmarks from './getfakebookmarks'; // fake bookmarks
// import getBookmarks from './getbookmarks'; // real bookmarks

function App() {
  const [bookmarks, setBookmarks] = useState();
  const [previousBookmarks, setPreviousBookmarks] = useState();

  const bookmarkClicked = (event) => {
      const target_id = event.target.id;
      console.log( target_id );
      const clicked = bookmarks.find( el => el.id === target_id );
      if ( clicked.children ) {
        setPreviousBookmarks(bookmarks)
        setBookmarks( clicked.children );
      } else if ( clicked.url) {
        window.open( clicked.url, '_blank' );
      }
  }

  const backBookmarksTree = () => {
    setBookmarks( previousBookmarks );
  }
    
  if (!bookmarks) {
    getBookmarks().then( (items) => {
      const root = items[0];
      setBookmarks( root['children'] );
    } );
    return "loading bookmarks...";
  }

  return (
    <Dashboard bookmarks={bookmarks} 
                onbookmarkclick={bookmarkClicked} 
                backBookmarksTree={backBookmarksTree}
                previousBookmarks={previousBookmarks} />
  );
}

export default App;
