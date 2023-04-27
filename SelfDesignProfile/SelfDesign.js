document.getElementById('background-color').addEventListener('change', function() {
  document.body.style.backgroundColor = this.value;
});

document.getElementById('text-color').addEventListener('change', function() {
  document.body.style.color = this.value;
});

document.getElementById('font-size').addEventListener('change', function() {
  document.body.style.fontSize = this.value + 'px';
});

/* text resizer */

$(document).ready(function() {
  let textboxCount = 0;
  let currentTextbox = null;

  $('#add-textbox').on('click', function() {
    textboxCount++;
    const newTextbox = $(`<div id="textbox-${textboxCount}" class="draggable resizable">
                        <textarea style="background-color: transparent; border: none; outline: none;"></textarea>
                      </div>`);

    $('.textboxes-container').append(newTextbox);
    newTextbox.draggable().resizable();

    // Deselect all other textboxes when a new one is created
    $('.resizable').removeClass('selected');
    newTextbox.addClass('selected');
    currentTextbox = newTextbox;

    // Scroll to the newly added textbox
    $('.textboxes-container').animate({ scrollTop: $('.textboxes-container')[0].scrollHeight }, 1000);
  });

  // Set the font size for the currently selected textbox
  $('#fontsize').on('input', function() {
    const fontSize = $(this).val();
    if (currentTextbox) {
      currentTextbox.find('textarea').css('font-size', fontSize + 'px');
    }
  });

 // Highlight the new textbox when a textbox is clicked
 $(document).on('click', '.resizable', function() {
  $('.resizable').removeClass('selected');
  $(this).addClass('selected');
  currentTextbox = $(this).find('textarea');
});

  // Deselect the currentTextbox when clicking outside of textboxes
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.resizable').length) {
      $('.resizable').removeClass('selected');
      currentTextbox = null;
    }
  });
});



$(document).ready(function() {
  $('#create-box').on('click', function() {
    const color = $('#color-picker').val();
    const newBox = $('<div class="color-box"></div>');
    
    newBox.css('background-color', color);
    newBox.appendTo('.canvas');
    
    newBox.draggable();
    newBox.resizable();
  });
});

$('#create-box').on('click', function() {
  let color = $('#color-picker').val();
  let $coloredBox = $('<div class="color-box"></div>').css('background-color', color);
  $('.textboxes-container').append($coloredBox);
  $coloredBox.draggable().resizable();
});