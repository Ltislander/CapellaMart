document.querySelectorAll('.condition-btn').forEach(function (button) {
  button.addEventListener('click', function () {
      document.querySelectorAll('.condition-btn').forEach(function (btn) {
          btn.classList.remove('active');
      });
      this.classList.add('active');
      document.querySelector('#item-condition').value = this.dataset.condition;
  });
});


document.getElementById("chatTab").addEventListener("click", function () {
  var chatBox = document.getElementById("chatBox");
  if (chatBox.style.display === "none") {
    chatBox.style.display = "block";
  } else {
    chatBox.style.display = "none";
  }
});

function changeImage(clickedThumbnail) {
  var mainImage = document.querySelector('.product-image');
  
  // Store the main image src temporarily
  var mainImageSrc = mainImage.src;
  
  // Set the main image src to the clicked thumbnail src
  mainImage.src = clickedThumbnail.src;

  // Set the clicked thumbnail src to the stored main image src
  clickedThumbnail.src = mainImageSrc;
}