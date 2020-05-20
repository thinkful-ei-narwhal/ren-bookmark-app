'use strict';
import $ from 'jquery';
import bookmark from './bookmarks';
import api from './api';
import view from './views';
import store from './store';
import './index.css';

function main() {
  api.getItems().then((items) => {
    items.forEach((item) => store.addBookmark(item));
    view.renderBookmark();
  });
  bookmark.eventListeners();
  view.renderBookmark();
}

$(main);
