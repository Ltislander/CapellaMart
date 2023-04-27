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
      const elementContainer = $('<div class="element-container"></div>');
      elementContainer.append(newTextbox);
      $('.canvas').append(elementContainer);

    $('.textboxes-container').append(newTextbox);
    newTextbox.draggable().resizable();

    // Deselect all other textboxes when a new one is created
    $('.resizable').removeClass('selected');
    newTextbox.addClass('selected');
    currentTextbox = newTextbox;

    // Wait for the new textbox to be created before selecting it
    newTextbox.ready(function() {
      newTextbox.find('textarea').trigger('click');
    });
  });

  // Set the font size for the currently selected textbox
  $('#fontsize').on('input', function() {
    const fontSize = $(this).val();
    if (currentTextbox) {
      currentTextbox.find('textarea').css('font-size', fontSize + 'px');
    }
  });

  // Select the clicked textbox
  $(document).on('click', '.resizable', function() {
    $('.resizable').removeClass('selected');
    $(this).addClass('selected');
    currentTextbox = $(this);
  });
  //deselects hightlight
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.resizable').length && !$(event.target).closest('.customization-options').length) {
      $('.resizable').removeClass('selected');
      currentTextbox = null;
    }
  });
  //text box deleter
  $(document).on('keydown', function(e) {
    if (e.which === 8) { // 8 is the key code for the delete key
      if (currentTextbox && !$(document.activeElement).is('textarea')) {
        currentTextbox.remove(); // remove the selected text box
        currentTextbox = null;
      }
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
    const elementContainer = $('<div class="element-container"></div>');
    elementContainer.append($coloredBox);
  $('.canvas').append(elementContainer);
  $('.textboxes-container').append($coloredBox);
  $coloredBox.draggable().resizable();
});



// image uploader before

$('#add-image').on('click', function() {
  $('#image-input').click();
});

$('#image-input').on('change', function(event) {
  const file = event.target.files[0];
  if (file && file.type.match('image.*')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const newImage = $(`<img src="${e.target.result}">`);
      const imageContainer = $(`<div class="draggable resizable"></div>`);
      imageContainer.append(newImage);
      elementContainer.append(imageContainer);
      $('.canvas').append(elementContainer);
      $('.textboxes-container').append(imageContainer);
      imageContainer.draggable().resizable({ aspectRatio: true });
    };
    reader.readAsDataURL(file);
  }
});


// For the text boxes
$('.canvas').append(newTextbox);

// For the color boxes
$('.canvas').append($coloredBox);

// For the image uploader
$('.canvas').append(imageContainer);

