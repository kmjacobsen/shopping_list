$(document).ready(function () {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    //append all html elements that show up for each list item in the ul
    $('.shopping-list').append(
      '<li>'+
        //run a jquery function/method? on the shopping-list-entry element to return the value of what the user types in and submits
        '<span class="shopping-item">' + $('#shopping-list-entry').val() + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
    ); //pairs with shopping list append function

    $(this)[0].reset();
  }); //pairs with shopping list submit function

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  }); //pairs with click and remove function


  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).parent().siblings().toggleClass('shopping-item_checked');
  });

}); //pairs with document ready function
