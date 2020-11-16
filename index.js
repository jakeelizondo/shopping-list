'use strict';
console.log(`hello jake`);

// app requirements!!!
// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

$(function () {
  //ADD AN ITEM FUNCTION
  $('#js-shopping-list-form').on('submit', function (e) {
    // disable default form action
    e.preventDefault();

    // find user submitted item
    const userItem = $(e.currentTarget)
      .find('input[name="shopping-list-entry"]')
      .val();

    //append user submitted item to list
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${userItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  });

  // listen for click on .shopping-item-toggle
  $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
    e.preventDefault();
    let target = $(this).closest('li').find('.shopping-item');

    $(target).toggleClass('shopping-item__checked');
  });

  // listen for click on .shopping-item-delete
  $('.shopping-list').on('click', '.shopping-item-delete', function (e) {
    e.preventDefault();
    let target = $(this).closest('li').remove();

    $(target).toggleClass('shopping-item__checked');
  });
});
