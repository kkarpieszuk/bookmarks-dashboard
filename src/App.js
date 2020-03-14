import React,{useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import getBookmarks from './getfakebookmarks'; // fake bookmarks
// import getBookmarks from './getbookmarks'; // real bookmarks

function App() {
  const [bookmarks, setBookmarks] = useState();

  const bookmarkClicked = (event) => {
      console.log( event.target.id );
      const clicked = bookmarks.find( el => el.id === event.target.id );
      if ( clicked.children ) {
        setBookmarks( clicked.children );
      } else if ( clicked.url) {
        window.open( clicked.url, '_blank' );
      }
  }
    
  if (!bookmarks) {
    getBookmarks().then( (items) => {
      const root = items[0];
      setBookmarks( root['children'] );
    } );
    return "loading bookmarks...";
  }

  return (
    <Dashboard bookmarks={bookmarks} onbookmarkclick={bookmarkClicked} />
  );
}

export default App;
