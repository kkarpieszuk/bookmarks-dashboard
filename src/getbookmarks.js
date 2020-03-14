import browser from 'webextension-polyfill';

const getBookmarks = () => {
    return browser.bookmarks.getTree();
}

export default getBookmarks