'use strict';
import $ from 'jquery';
import store from './store';

function generateIntialView() {
  return `<button type="submit" class="new-form">Add</button>
      <select class="filter-list">
        <option value="" selected disabled hidden>Filter By Rating</option>
        <option value="5">☆☆☆☆☆</option>
        <option value="4">☆☆☆☆</option>
        <option value="3">☆☆☆</option>
        <option value="2">☆☆</option>
        <option value="1">☆</option>
      </select><label name="bookmarks">Bookmarks</label><ul class="bookmark-list">`;
}
function generateBookmark(bookmarks) {
  if (!bookmarks.expanded) {
    return `
        <li class="bookmark-links" data-item-id="${bookmarks.id}">
          <button class="bookmark-links-btn">${bookmarks.title}</button
          ><span class="star-rating">${bookmarks.rating}</span><button type='submit' class='delete-bookmark'>Delete</button>
        </li>`;
  } else {
    return `
  <li class="bookmark-links-expanded" data-item-id="${bookmarks.id}">${bookmarks.title}
  <span for="star-rating-expaned">${bookmarks.rating}</span>
  <button type='submit' class='delete-bookmark'>Delete</button>
  <p class="description-expanded">${bookmarks.desc}</p>
  <a href="${bookmarks.url}">Visit Site</a></li>`;
  }
}
function generateBookmarkString(bookmarkItem) {
  const items = bookmarkItem.map(item => generateBookmark(item));
  return items.join('');
}

function generateAddBookmark() {
  let addView = `
      <input
        type="text"
        placeholder="Title" class="bookmark-title"
      />
      <input type="text" placeholder="Your link here" class="bookmark-url" />
      <label></label>
      <input
        id="star5"
        name="bookmark-rating'"
        type="radio"
        value="5"
        class="bookmark-rating" 
      />
      <label for="star5">☆</label>
      <input
        id="star4"
        name="star"
        type="radio"
        value="4"
        class="bookmark-rating" 
      />
      <label for="star4">☆</label>
      <input
        id="star3"
        name="star"
        type="radio"
        value="3"
        class="bookmark-rating" 
      />
      <label for="star3">☆</label>
      <input
        id="star2"
        name="star"
        type="radio"
        value="2"
        class="bookmark-rating" 
      />
      <label for="star2">☆</label>
      <input
        id="star1"
        name="star"
        type="radio"
        value="1"
        class="bookmark-rating" 
      />
      <label for="star1">☆</label>
      <div class="clear"></div>
      <textarea
        class="bookmark-description"
        placeholder="Add description here"
        maxlength="100"
      />
      <button type="submit" class="add-bookmark-item">Add</button>
    `;
  $('.bookmark-app-start').html(addView);
}

function renderBookmark() {
  if (!store.adding) {
    let bookmarkItems = [...store.bookmark];
    let string = generateIntialView() + generateBookmarkString(bookmarkItems);
    $('.bookmark-app-start').html(string);
  } else {
    generateAddBookmark();
  }
}

export default {
  renderBookmark,
  generateAddBookmark
};
