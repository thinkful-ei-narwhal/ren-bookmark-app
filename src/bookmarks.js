'use strict';
import $ from 'jquery';
import view from './views';
import store from './store';
import api from './api';

function getItemIdFromElement(item) {
  return $(item)
    .closest('.bookmark-links')
    .data('item-id');
}
function handleExpand() {
  $('.bookmark-app-start').on('click', '.bookmark-links-btn', event => {
    event.preventDefault();
    console.log('yes i work f u', store.bookmark);
    const id = getItemIdFromElement(event.currentTarget);
    console.log(id);
    const bookmarkItem = store.findId(id);
    store.toggleViews(bookmarkItem);
    view.renderBookmark();
  });
}

function addNewBookmark() {
  const title = $('.bookmark-title').val();
  const url = $('.bookmark-url').val();
  const desc = $('.bookmark-description').val();
  const rating = $('.bookmark-rating').val();
  const item = { title, url, desc, rating };
  api.createItem(item).then(newItem => {
    store.addBookmark(newItem);
  });
}
function handleNewItemSubmit() {
  $('.bookmark-app-start').on('click', '.add-bookmark-item', event => {
    event.preventDefault();
    console.log(store.bookmark);
    store.adding = false;
    addNewBookmark();
    view.renderBookmark();
  });
}
function handleNewForm() {
  $('.bookmark-app-start').on('click', '.new-form', event => {
    event.preventDefault();
    store.adding = true;
    view.renderBookmark();
  });
}
function handleDeleteItemClicked() {
  $('.bookmark-links').on('click', '.delete-bookmark', event => {
    event.preventDefault();
    const id = getItemIdFromElement(event.currentTarget);
    console.log('workin', id);
    // api
    //   .deleteItem(id)
    //   .then(() => {
    //     store.deleteBookmark(id);
    //     view.renderBookmark();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // store.setError(error.message);
    //     // renderError();
    //   });
  });
}
function eventListeners() {
  handleNewForm();
  handleNewItemSubmit();
  handleDeleteItemClicked();
  handleExpand();
}
export default {
  eventListeners
};
