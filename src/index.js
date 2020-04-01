'use strict';
import $ from 'jquery';
import bookmark from './bookmarks';
import api from './api';
import view from './views';
import store from './store';

// Add bookmarks to list containing: id, title, url, rating, description
// See list of bookmarks when first opening display only title and rating
// Display more details when click on a bookmark, display a visit site button --- toggling
// Remove bookmarks from list
//Give feedback when a bookmark cant be added (title and url required)
//Select a filter dropdown for minimum rating
//Edit rating and description

// *********Html generator function***************
// function generateBookmark() {}

// function generateEditBookmark() {}
// //***********Handlers************
// function filterRating() {}
// function addBookmark() {}
// function errorFeedback() {}
// function editBookmark() {}
//**********Eventlisteners****************

// function handleDeleteBookmark() {}
// function handleError() {}
// //function handleFilter() {}
// function handleEditBookmark() {}

//************Render***********

function main() {
  api.getItems().then(items => {
    items.forEach(item => store.addBookmark(item));
    view.renderBookmark();
  });
  bookmark.eventListeners();
  view.renderBookmark();
}

$(main);
