// HTML for the up, down, and done buttons
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
   $("#addBtn").click(addBtnClick);

   // TODO: Add item if user presses Enter

   $("#newItemText").keydown(function(event) {
      if (event.keyCode === 13) {
         console.log("enter key pressed");
         addBtnClick();
      }
   });
});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   // Don't add empty strings
   if (itemText.length !== 0) {
      addItem(itemText);

      // Clear text and put focus back in text input
      $("#newItemText").val("").focus();
   } 
}

function addItem(item) {      
   // Create a new <li> for the list
   let $newItem = $(`<li><span>${item}</span></li>`);
   
   // Up button moves item up one spot
   let $upButton = $(upButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index - 1); 
   });
   
   // Down button moves item down one spot
   let $downButton = $(downButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index + 1); 
   });
      
   // Add click hander for done button
   $doneButton = $(doneButtonHtml).click(function() {
      // Remove item from list
      let index = $(this.parentElement).index();
      removeItem(index);
   });

   // Add all buttons to the new item, and add new item to list
   $newItem.append($upButton, $downButton, $doneButton);
   $("ol").append($newItem);   
}

function moveItem(fromIndex, toIndex) {
   // TODO: Complete the function
   let $items = $('li');
   console.log($items);

   let removed = $($items[fromIndex]).detach();
   console.log("removed: " + removed);
   if (fromIndex > toIndex){
      $(removed).insertBefore($items[toIndex]);
   }
   if (fromIndex < toIndex){
      $(removed).insertAfter($items[toIndex]);
   }
   
}

function removeItem(index) {
   // TODO: Complete the function
   let $items = $('li');
   $($items[index]).detach();
}