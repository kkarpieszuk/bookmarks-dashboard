import React,{useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import getBookmarks from './getfakebookmarks'; // fake bookmarks
// import getBookmarks from './getbookmarks'; // real bookmarks

function App() {
  const [bookmarks, setBookmarks] = useState();

  getBookmarks().then( (items) => {
    const root = items[0];
    setBookmarks( root['children'] );
  } );
    
  if (!bookmarks) {
    return "loading bookmarks...";
  }

  return (
    <Dashboard bookmarks={bookmarks} />
  );
}

export default App;
