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

  $('#add-textbox').on('click', function() {
    textboxCount++;
    const newTextbox = $(`<div id="textbox-${textboxCount}" class="draggable resizable">
                            <textarea></textarea>
                          </div>`);

    $('.textboxes-container').append(newTextbox);
    newTextbox.draggable().resizable();
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