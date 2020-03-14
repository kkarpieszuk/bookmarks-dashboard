import React,{useState} from 'react';
// import browser from 'webextension-polyfill';
import browserMock from 'webextensions-api-mock';
import './App.css';
import Dashboard from './components/Dashboard'

function App() {

  const [bookmarks, setBookmarks] = useState();

  const browser = browserMock();

  if ( typeof browser !== 'undefined' ) {

    if ( !bookmarks ) {
      browser.bookmarks.getTree().then( (items) => {
        const root = items[0];
        console.log(root);
        setBookmarks( root['children'] );
      });
    }    
  }

  if (!bookmarks) {
    return "loading bookmarks...";
  }
  
console.log(bookmarks);

  return (
    <Dashboard bookmarks={bookmarks} />
  );
}

export default App;
